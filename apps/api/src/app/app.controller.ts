import { Controller, Get } from '@nestjs/common';

import { Account, Message } from '@bitcoin-fullstack-project/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('current-exchange-rate')
  getExchangeRateData(): number {
    return this.appService.getExchangeRateData();
  }

  @Get('accounts')
  getAccountsData(): Account[] {
    return this.appService.getAccountsData();
  }
}
