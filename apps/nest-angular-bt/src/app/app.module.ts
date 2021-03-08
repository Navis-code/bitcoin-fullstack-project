import { MaterialModule } from '@bitcoin-fullstack-project/material';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ExchangeToDollarPipe } from '../pipes/exchange-to-dollar/exchange-to-dollar.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AppComponent } from './app.component';
import { WrapperApiService } from './services/wrapper-api.service';
import { WebSocketService } from './services/web-socket.service';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeToDollarPipe,
    AccountListComponent,
    AccountDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [WebSocketService, WrapperApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
