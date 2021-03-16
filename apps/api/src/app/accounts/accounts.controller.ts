import type { Account, Statement } from '@bitcoin-fullstack-project/api-interfaces';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  async addAccount(@Body() completeBody: Account) {
    const generatedAccountId = await this.accountsService.insertAccount(
      completeBody
    );
    return { id: generatedAccountId };
  }

  @Get()
  async getAllAccounts(): Promise<Account[]> {
    return await this.accountsService.getAllAccounts();
  }

  @Get(':id')
  async getStatements(@Param('id') id: string): Promise<Statement[]> {
    return await this.accountsService.getStatementsByAccountId(id);
  }
}
