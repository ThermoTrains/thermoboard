import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ValueImageDialogComponent } from '@app/shared/value-image-dialog/value-image-dialog.component';

@Component({
  selector: 'thermo-value-image',
  templateUrl: './value-image.component.html',
  styleUrls: ['./value-image.component.scss']
})
export class ValueImageComponent {
  @Input() value: any;

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(ValueImageDialogComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '98vw',
      maxHeight: '70vh',
      data: {
        image: this.value.image
      }
    });
  }
}
