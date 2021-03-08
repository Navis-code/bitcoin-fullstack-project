import { Component, OnInit } from '@angular/core';
import { pairwise, startWith } from 'rxjs/operators';
import { transition, trigger } from '@angular/animations';
import { blinkAnimation } from '../../utils/animations/blinking';
import { Router } from '@angular/router';
import { WebSocketService } from '../services/web-socket.service';
import { WrapperApiService } from '../services/wrapper-api.service';

@Component({
  selector: 'bitcoin-fullstack-project-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  animations: [trigger('blink', [transition('false => true', blinkAnimation)])],
})
export class AccountListComponent implements OnInit {
  currentExchangeRate$;
  accounts$;
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
    private webSocketService: WebSocketService,
    public router: Router,
    private wrapperApiService: WrapperApiService
  ) {}

  ngOnInit(): void {
    this.accounts$ = this.wrapperApiService.getAccounts();
    this.currentExchangeRate$ = this.webSocketService.currentExchangeRate$
      .pipe(startWith(0), pairwise())
      .subscribe(([previousValue, currentvalue]) => {
        if (currentvalue > previousValue && previousValue !== 0) {
          this.valueIncrement = true;
          this.valueDecrement = false;
          this.blink = true;
        }
        if (currentvalue < previousValue && previousValue !== 0) {
          this.valueIncrement = false;
          this.valueDecrement = true;
          this.blink = true;
        }
        this.currentExchangeRate$ = currentvalue;
      });
  }
  animEnd(event: AnimationEvent): void {
    this.blink = false;
  }
  onRowClicked(row) {
    this.router.navigate([`account/${row.id}`]);
  }
}
