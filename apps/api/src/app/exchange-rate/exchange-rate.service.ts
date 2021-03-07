import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeRateService {
  getExchangeRateData(): number {
    return 49033.2;
  }
}
