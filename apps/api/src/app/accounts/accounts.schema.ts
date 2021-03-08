import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  _id: false,
  id: { type: String, required: true },
  accountName: { type: String, required: true },
  category: { type: String, required: true },
  tag: { type: String, required: true },
  balance: { type: Number, required: true },
  availableBalance: { type: Number, required: true },
});

export const AccDetailSchema = new mongoose.Schema({
  accountId: { type: String, required: true },
  statements: [
    {
      orderId: String,
      orderCode: String,
      debit: { type: Number, required: false },
      credit: { type: Number, required: false },
      balance: Number,
    },
  ],
});
