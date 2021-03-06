import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangeToDollar',
})
export class ExchangeToDollarPipe implements PipeTransform {
  transform(value: number, currentExchangeRate: number): string {
    const dollarValue = value * currentExchangeRate;

    return `$${dollarValue}`;
  }
}
