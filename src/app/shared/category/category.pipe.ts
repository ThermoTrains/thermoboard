import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 'TRAIN_CARRIAGE') {
      return 'Wagen';
    }
    if (value === 'LOCOMOTIVE') {
      return 'Lokomotive';
    }

    return null;
  }
}
