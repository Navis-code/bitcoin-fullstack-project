import { Controller, Get } from '@nestjs/common';

import { Message } from '@bitcoin-fullstack-project/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('current-exchange-rate')
  getExchangeRateData(): number {
    return this.appService.getExchangeRateData();
  }
}
