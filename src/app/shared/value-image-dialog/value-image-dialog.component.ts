import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IRON_PALETTE } from '@app/shared/value-image-dialog/color-palette';
import * as EXIF from 'exif-js/exif';
import * as nearestColor from 'nearest-color';

const colorFinder = nearestColor.from(IRON_PALETTE);

@Component({
  selector: 'thermo-value-image-dialog',
  templateUrl: './value-image-dialog.component.html',
  styleUrls: ['./value-image-dialog.component.scss']
})
export class ValueImageDialogComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  private ctx: CanvasRenderingContext2D;
  private image: HTMLImageElement;
  private zoom = 1;
  private dragging = false;
  private positionX = 0;
  private positionY = 0;
  private imageWidth = 0;
  private imageHeight = 0;
  private ratio = 1;
  private tooltip = null;
  private temperatureScale: number = null;
  private temperatureOffset: number = null;
  private prevMouseX: number;
  private prevMouseY: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.initCanvas();

    this.positionY = (this.canvasRef.nativeElement.height - this.imageHeight) / 2;

    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.image = new Image();

    this.image.onload = () => {
      this.drawImage();
      this.readMetaData();
    };

    this.image.src = this.data.image;
  }

  private readMetaData() {
    const that = this;
    EXIF.getData(this.image as any, function () {
      const tag = EXIF.getTag(this, 'ImageDescription');
      const meta = tag || EXIF.getAllTags(this)[Object.keys(EXIF.getAllTags(this)).filter(key => {
        return key === undefined;
      })[0]];

      if (!meta) {
        return;
      }

      const i = meta.indexOf('/');

      if (i <= 0) {
        return;
      }

      const strings = meta.split('/');

      (function () {
        this.temperatureOffset = parseFloat(strings[0]);
        this.temperatureScale = parseFloat(strings[1]);
      }).bind(that)();
    });
  }

  initCanvas() {
    this.canvasRef.nativeElement.width = this.canvasRef.nativeElement.clientWidth;
    this.canvasRef.nativeElement.height = this.canvasRef.nativeElement.clientHeight;
  }

  drawImage() {
    this.ratio = this.image.width / this.image.height;

    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    this.imageWidth = this.canvasRef.nativeElement.width * this.zoom;
    this.imageHeight = this.imageWidth / this.ratio;

    this.positionX = Math.min(this.positionX, 0);
    this.positionY = Math.max(this.positionY, 0);

    if (this.positionX + this.imageWidth < this.canvasRef.nativeElement.width) {
      this.positionX = this.canvasRef.nativeElement.width - this.imageWidth;
    }

    if (this.positionY + this.imageHeight > this.canvasRef.nativeElement.height) {
      this.positionY = this.canvasRef.nativeElement.height - this.imageHeight;
    }

    this.ctx.drawImage(this.image, this.positionX, this.positionY, this.imageWidth, this.imageHeight);

    if (this.tooltip) {
      this.drawTooltip();
    }
  }

  private drawTooltip() {
    const backgroundRectWidth = 60;
    const backgroundRectHeight = 20;
    const padding = 3;
    const maxWidth = backgroundRectWidth - (2 * padding);

    this.ctx.save();
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.tooltip.x - padding, this.tooltip.y + 16, backgroundRectWidth, backgroundRectHeight);
    this.ctx.restore();
    this.ctx.save();
    this.ctx.font = '16px sans-serif';
    this.ctx.fillText(this.tooltip.text, this.tooltip.x, this.tooltip.y + 32, maxWidth);
    this.ctx.restore();
  }

  onMousewheel(event: MouseWheelEvent) {
    const wheelDeltaY = event.wheelDeltaY || event.wheelDelta;

    this.zoom = wheelDeltaY > 0
      ? this.zoom + 1
      : this.zoom - 1;

    if (this.zoom > 30) {
      this.zoom = 30;
      return;
    }

    if (this.zoom < 1) {
      this.zoom = 1;
      return;
    }

    const centerX = this.canvasRef.nativeElement.width / 2;
    this.positionX = wheelDeltaY > 0
      ? this.positionX - centerX
      : this.positionX + centerX;

    this.positionY = wheelDeltaY > 0
      ? this.positionY - (this.canvasRef.nativeElement.height / this.ratio / 2)
      : this.positionY + (this.canvasRef.nativeElement.height / this.ratio / 2);

    this.drawImage();
  }

  onMouseDown() {
    this.dragging = true;
    this.prevMouseX = null;
    this.prevMouseY = null;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.canvasRef.nativeElement === event.target) {
      this.updateTooltip(event);
    }

    if (!this.dragging) {
      return;
    }

    this.positionX += this.prevMouseX ? event.screenX - this.prevMouseX : 0;
    this.positionY += this.prevMouseY ? event.screenY - this.prevMouseY : 0;

    this.prevMouseX = event.screenX;
    this.prevMouseY = event.screenY;

    this.drawImage();
  }

  updateTooltip(event: MouseEvent): void {
    if (!this.temperatureScale || !this.temperatureOffset) {
      return;
    }

    const x = event.offsetX;
    const y = event.offsetY;

    if (x < this.positionX || x > this.positionX + this.imageWidth ||
      y < this.positionY || y > this.positionY + this.imageHeight) {

      this.tooltip = null;
      this.drawImage();

      return;
    }

    const imageData = this.ctx.getImageData(x, y, 1, 1);
    const color = colorFinder({ r: imageData.data[0], g: imageData.data[1], b: imageData.data[2] });
    const scale = 1 / this.temperatureScale;

    const value = color.name;
    const unclamped = (value * scale) + this.temperatureOffset;
    const celsius = Math.round(this.calculateTemp(unclamped) * 100) / 100;

    this.tooltip = {
      x,
      y,
      text: `${celsius}°C`
    };

    this.drawImage();
  }

  /**
   * Optimized formula to calculate temperature using the following constants:
   * emissivity = 0.95;
   * distance = 0;
   * reflected_temp = 20;
   * atmospheric_temp = 20;
   * relative_humidity = 50;
   * planck_R1 = 16556;
   * planck_R2 = 0.046952017;
   * planck_B = 1428;
   * planck_F = 1;
   * planck_O = -207;
   * @param {number} value
   * @returns {number}
   */
  private calculateTemp(value: number): number {
    // noinspection MagicNumberJS
    const obj = (value / 0.95 - 154.2268539477985 + -207);
    const log = Math.log(16556 / (0.046952017 * obj) + 1);
    const celsius = 1428 / log - 273.15;

    return celsius;
  }

  @HostListener('window:mouseup', [])
  onMouseUp() {
    this.dragging = false;
  }

  @HostListener('window:resize')
  onResize() {
    this.initCanvas();
    this.drawImage();
  }
}
