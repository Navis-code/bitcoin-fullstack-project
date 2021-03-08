import { ExchangeToDollarPipe } from './exchange-to-dollar.pipe';

describe('ExchangeToDollarPipe', () => {
  it('create an instance', () => {
    const pipe = new ExchangeToDollarPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return dollar string value operation', () => {
    const value = 20;
    const currentExchangeRate = 100;
    const expectedValue = '$2000.00';

    const pipe = new ExchangeToDollarPipe();

    expect(pipe.transform(value, currentExchangeRate)).toEqual(expectedValue);
  });
});
