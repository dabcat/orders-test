import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment.prod';

import 'rxjs/add/operator/map';
import { Order } from '../models/order';
import { Transaction } from '../models/transaction';
import { Payment } from '../models/payment';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {
  basePath: string;

  constructor(private http: HttpClient) {
    this.basePath = environment.apiBasePath;
  }

  getOrders(): Observable<Order> {
    return this.http.get(this.basePath + '/orders', HTTP_OPTIONS)
    .map((res: any) => this.handleResults(res))
  }

  getTransactions(): Observable<Transaction> {
    return this.http.get(this.basePath + '/transactions', HTTP_OPTIONS)
    .map((res: any) => this.handleResults(res))
  }

  getPayments(): Observable<Payment> {
    return this.http.get(this.basePath + '/payments', HTTP_OPTIONS)
      .map((res: any) => this.handleResults(res))
  }

  handleResults(response:any) {
    if(!response.status) {
      throw new Error('This request has failed ' + response.status);
    } else {
      return response.result ? response.result : [];
    }
  }

}
