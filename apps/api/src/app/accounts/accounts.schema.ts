import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  accountName: { type: String, required: true },
  category: { type: String, required: true },
  tag: { type: String, required: true },
  balance: { type: Number, required: true },
  availableBalance: { type: Number, required: true },
});
