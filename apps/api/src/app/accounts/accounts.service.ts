import {
  Account,
  AccountDetail,
} from '@bitcoin-fullstack-project/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

interface AccountModel extends Account, Document {}
interface AccountDetailModel extends AccountDetail, Document {}

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel('Account') private readonly accountModel: Model<AccountModel>,
    @InjectModel('Statement')
    private readonly statementModel: Model<AccountDetailModel>
  ) {}

  async getAllAccounts(): Promise<Account[]> {
    const result = await this.accountModel.find();
    return result;
  }

  async insertAccount({
    accountName,
    category,
    tag,
    balance,
    availableBalance,
  }: Account) {
    const newAccount = new this.accountModel({
      accountName,
      category,
      tag,
      balance,
      availableBalance,
    });
    const result = await newAccount.save();
    console.log({ result });
    return result.id;
  }

  async getStatementsByAccountId(id: string) {
    const [result] = await this.statementModel.find({ accountId: id });

    return result.statements;
  }
}
