import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { forkJoin } from "rxjs/observable/forkJoin";
import { mergeMap } from 'rxjs/operators';

import { Order } from '../models/order';
import { Payment } from '../models/payment';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  matchedTransactions$: Subject<Order> = new BehaviorSubject<Order>(null)
  searchQuery: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {

    forkJoin(this.api.getOrders(), this.api.getPayments()).subscribe(([orders, payments]) => {
      const results = this.buildResults(orders, payments);
      this.matchedTransactions$.next(results);
    })
  }

  buildResults(orders, payments) {
    return orders.map(order => {
      Object.keys(payments).filter(k => {
        const foundPaymentKey = payments[k].orderId.indexOf(order._id);
        const foundPayment = foundPaymentKey > -1 ? payments[foundPaymentKey] : null;
        return Object.assign(order, {payment: foundPayment})
      })
      return order;
    })
  }
}
