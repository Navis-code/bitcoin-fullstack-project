import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeToDollarPipe } from '../pipes/exchange-to-dollar/exchange-to-dollar.pipe';

@NgModule({
  declarations: [AppComponent, ExchangeToDollarPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
