import { Account } from '@bitcoin-fullstack-project/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async getAllAccounts(): Promise<Account[]> {
    return await this.accountsService.getAllAccounts();
  }
}
