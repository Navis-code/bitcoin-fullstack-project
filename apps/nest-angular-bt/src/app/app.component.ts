import { pairwise, startWith } from 'rxjs/operators';
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
  currentExchangeRate$;
  accounts$ = this.http.get<Account[]>('/api/accounts');
  displayedColumns: string[] = [
    'accountName',
    'category',
    'tag',
    'balance',
    'availableBalance',
  ];
  valueIncrement: boolean;
  valueDecrement: boolean;

  constructor(
    private http: HttpClient,
    private webSocketService: WebSocketService
  ) {}
  ngOnInit(): void {
    // listen to an event from socket.io Server
    this.webSocketService.listen('connection').subscribe((data) => {
      console.log(data);
    });
    this.webSocketService.emit('get-exchange', 'start');

    this.webSocketService
      .listen('exchange-rate')
      .pipe(startWith(0), pairwise())
      .subscribe(([previousValue, currentvalue]) => {
        console.log(previousValue);
        console.log(currentvalue);
        if (currentvalue > previousValue) {
          this.valueIncrement = true;
          this.valueDecrement = false;
          console.log('INCREMENTA');
        } else {
          this.valueIncrement = false;
          this.valueDecrement = true;
          console.log('BAJA');
        }
        this.currentExchangeRate$ = currentvalue;
      });
  }
}
