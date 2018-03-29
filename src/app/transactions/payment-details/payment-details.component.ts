import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs/Observable';

import { Transaction } from '../../models/transaction';
import { Payment } from '../../models/payment';

import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit, OnDestroy {

  transactionId: any;
  private sub: Subscription;
  transactions$: Observable<Payment>;

  constructor(private router: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.transactionId = params.id;
      this.transactions$ = this.api.getPayments([{name: 'orderId', value: this.transactionId}]).pluck('0').pluck('transactions')
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
