import { Account } from '@bitcoin-fullstack-project/api-interfaces';
import { WebSocketService } from './../web-socket.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pairwise, startWith } from 'rxjs/operators';
import { transition, trigger } from '@angular/animations';
import { blinkAnimation } from '../../utils/animations/blinking';
import { Router } from '@angular/router';

@Component({
  selector: 'bitcoin-fullstack-project-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  animations: [trigger('blink', [transition('false => true', blinkAnimation)])],
})
export class AccountListComponent implements OnInit {
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
  blink = false;
  constructor(
    private http: HttpClient,
    private webSocketService: WebSocketService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.webSocketService
      .listen('exchange-rate')
      .pipe(startWith(0), pairwise())
      .subscribe(([previousValue, currentvalue]) => {
        console.log(previousValue);
        console.log(currentvalue);
        if (currentvalue > previousValue && previousValue !== 0) {
          this.valueIncrement = true;
          this.valueDecrement = false;
          console.log('INCREMENTA');
          this.blink = true;
        }
        if (currentvalue < previousValue && previousValue !== 0) {
          this.valueIncrement = false;
          this.valueDecrement = true;
          console.log('BAJA');
          this.blink = true;
        }
        this.currentExchangeRate$ = currentvalue;
      });
  }
  animEnd(event: AnimationEvent): void {
    this.blink = false;
  }
  onRowClicked(row) {
    console.log('ROW clicked; ', row);
    this.router.navigate([`account/${row.id}`]);
  }
}
