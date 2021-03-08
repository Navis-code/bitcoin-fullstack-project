export interface Statement {
  orderId: string;
  orderCode: string;
  debit?: number;
  credit?: number;
  balance: number;
}
