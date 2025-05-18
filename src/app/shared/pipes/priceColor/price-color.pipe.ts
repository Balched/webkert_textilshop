import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceColor',
  standalone: true
})
export class PriceColorPipe implements PipeTransform {
  transform(price: number): string {
    if (price < 5000) {
      return 'green';
    } else if (price >= 5000) {
      return 'red';
    } else {
      return 'black';
    }
  }
}
