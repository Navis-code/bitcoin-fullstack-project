import { Statement } from './statement.interface';

export interface AccountDetail {
  accountId: string;
  statements: Statement[];
}
