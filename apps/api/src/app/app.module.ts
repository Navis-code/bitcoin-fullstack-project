import { AppGateway } from './gateway/app.gateway';
import { ExchangeRateModule } from './exchange-rate/exchange-rate.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    AccountsModule,
    ExchangeRateModule,
    MongooseModule.forRoot(process.env.DB_URL),
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
