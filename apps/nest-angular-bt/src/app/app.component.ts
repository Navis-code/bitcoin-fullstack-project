import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '@bitcoin-fullstack-project/api-interfaces';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'bitcoin-fullstack-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentExchangeRate$ = this.http.get<number>('/api/exchange-rate');
  accounts$ = this.http.get<Account[]>('/api/accounts');
  constructor(
    private http: HttpClient,
    private webSocketService: WebSocketService
  ) {}
  ngOnInit(): void {
    // listen to an event from socket.io Server
    this.webSocketService.listen('test').subscribe((data) => {
      console.log(data);
    });
  }
}
