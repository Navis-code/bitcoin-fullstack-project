import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getExchangeRateData(): number {
    return 49033.2;
  }
}
