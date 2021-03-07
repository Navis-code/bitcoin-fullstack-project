import { Account } from '@bitcoin-fullstack-project/api-interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

interface AccountModel extends Account, Document {}

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel('Account') private readonly accountModel: Model<AccountModel>
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

  getAllAccountsFake(): Account[] {
    return [
      {
        accountName: 'Test Account 1',
        category: 'Affiliates',
        tag: 'test',
        balance: 10,
        availableBalance: 8,
      },
      {
        accountName: 'Test Account 2',
        category: 'Affiliates',
        tag: 'test',
        balance: 2,
        availableBalance: 2,
      },
      {
        accountName: 'Test Account 3',
        category: 'Affiliates',
        tag: 'test',
        balance: 23,
        availableBalance: 2,
      },
      {
        accountName: 'Test Account 4',
        category: 'Affiliates',
        tag: 'test',
        balance: 38.2,
        availableBalance: 22.1,
      },
      {
        accountName: 'Test Account 5',
        category: 'Affiliates',
        tag: 'test',
        balance: 222.22,
        availableBalance: 102.5,
      },
      {
        accountName: 'Test Account 6',
        category: 'Affiliates',
        tag: 'test',
        balance: 34,
        availableBalance: 12.69,
      },
      {
        accountName: 'Test Account 7',
        category: 'Affiliates',
        tag: 'test',
        balance: 211.45,
        availableBalance: 102.5,
      },
      {
        accountName: 'Test Account 8',
        category: 'Affiliates',
        tag: 'test',
        balance: 0.48,
        availableBalance: 0.15,
      },
      {
        accountName: 'Test Account 9',
        category: 'Affiliates',
        tag: 'test',
        balance: 55.24,
        availableBalance: 21.66,
      },
      {
        accountName: 'Test Account 10',
        category: 'Affiliates',
        tag: 'test',
        balance: 77.14,
        availableBalance: 65.5,
      },
      {
        accountName: 'Test Account 11',
        category: 'Affiliates',
        tag: 'test',
        balance: 123.4,
        availableBalance: 55.5,
      },
      {
        accountName: 'Test Account 12',
        category: 'Affiliates',
        tag: 'test',
        balance: 2.5,
        availableBalance: 2.5,
      },
      {
        accountName: 'Test Account 13',
        category: 'Affiliates',
        tag: 'test',
        balance: 13,
        availableBalance: 11.2,
      },
      {
        accountName: 'Test Account 14',
        category: 'Affiliates',
        tag: 'test',
        balance: 0.22,
        availableBalance: 0.22,
      },
      {
        accountName: 'Test Account 15',
        category: 'Affiliates',
        tag: 'test',
        balance: 2.22,
        availableBalance: 1.5,
      },
    ];
  }
}
