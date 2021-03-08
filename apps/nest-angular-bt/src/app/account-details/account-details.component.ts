import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WrapperApiService } from '../services/wrapper-api.service';

@Component({
  selector: 'bitcoin-fullstack-project-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  statement$: any;
  displayedColumns: string[] = [
    'orderId',
    'orderCode',
    'credit',
    'debit',
    'balance',
  ];
  constructor(
    private route: ActivatedRoute,
    private apiWrapper: WrapperApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.statement$ = this.apiWrapper.getAccountDetailsById(params.accountId);
    });
  }
}
