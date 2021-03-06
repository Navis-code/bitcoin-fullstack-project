import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, Account } from '@bitcoin-fullstack-project/api-interfaces';

@Component({
  selector: 'bitcoin-fullstack-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  currentExchangeRate$ = this.http.get<number>('/api/current-exchange-rate');
  accounts$ = this.http.get<Account[]>('/api/accounts');
  constructor(private http: HttpClient) {}
}
