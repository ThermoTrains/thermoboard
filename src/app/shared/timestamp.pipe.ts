import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {
  }

  transform(value: any, args?: any): any {

    if (!value) {
      return null;
    }

    return this.datePipe.transform(new Date(value.replace(' ', 'T')), args || 'dd.MM.yyyy HH:mm');
  }
}
