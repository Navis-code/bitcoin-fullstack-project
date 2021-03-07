import { ExchangeRateService } from './exchange-rate.service';
import { Controller, Get } from '@nestjs/common';

@Controller('exchange-rate')
export class ExchangeRateController {
  constructor(private readonly exchangeRateService: ExchangeRateService) {}

  @Get()
  getExchangeRateData(): number {
    return this.exchangeRateService.getExchangeRateData();
  }
}
