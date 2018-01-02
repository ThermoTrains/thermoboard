import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.canvasRef.nativeElement.width = this.canvasRef.nativeElement.clientWidth;
    this.canvasRef.nativeElement.height = this.canvasRef.nativeElement.clientHeight;
    this.positionY = (this.canvasRef.nativeElement.height - this.imageHeight) / 2;

    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.image = new Image();

    this.image.onload = this.drawImage.bind(this);
    this.image.src = this.data.image;
  }

  drawImage() {
    this.ratio = (this.image.width / this.image.height) / 2;

    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    this.imageWidth = this.canvasRef.nativeElement.width * this.zoom;
    this.imageHeight = (this.canvasRef.nativeElement.height / this.ratio) * this.zoom;

    this.positionX = Math.min(this.positionX, 0);
    this.positionY = Math.max(this.positionY, 0);

    if (this.positionX + this.imageWidth < this.canvasRef.nativeElement.width) {
      this.positionX = this.canvasRef.nativeElement.width - this.imageWidth;
    }

    if (this.positionY + this.imageHeight > this.canvasRef.nativeElement.height) {
      this.positionY = this.canvasRef.nativeElement.height - this.imageHeight;
    }

    this.ctx.drawImage(this.image, this.positionX, this.positionY, this.imageWidth, this.imageHeight);
  }

  onMousewheel(event: MouseWheelEvent) {
    this.zoom = event.wheelDeltaY > 0
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
    this.positionX = event.wheelDeltaY > 0
      ? this.positionX - centerX
      : this.positionX + centerX;

    this.positionY = event.wheelDeltaY > 0
      ? this.positionY - (this.canvasRef.nativeElement.height / this.ratio / 2)
      : this.positionY + (this.canvasRef.nativeElement.height / this.ratio / 2);

    this.drawImage();
  }

  onMouseDown() {
    this.dragging = true;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.dragging) {
      return;
    }

    this.positionX += event.movementX;
    this.positionY += event.movementY;

    this.drawImage();
  }

  @HostListener('window:mouseup', [])
  onMouseUp() {
    this.dragging = false;
  }
}
