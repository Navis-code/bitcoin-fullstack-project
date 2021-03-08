import { MaterialModule } from '@bitcoin-fullstack-project/material';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeToDollarPipe } from '../pipes/exchange-to-dollar/exchange-to-dollar.pipe';
import { WebSocketService } from './web-socket.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ExchangeToDollarPipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule,
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
