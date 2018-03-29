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

  getOrders(filter?: Array<any>): Observable<Order> {
    const filters = this.handleFilters(filter);
    return this.http.get(this.basePath + `/orders${filters}`, HTTP_OPTIONS)
    .map((res: any) => this.handleResults(res))
  }

  getTransactions(filter?: Array<any>): Observable<Transaction> {
    const filters = this.handleFilters(filter);
    return this.http.get(this.basePath + `/transactions${filters}`, HTTP_OPTIONS)
    .map((res: any) => this.handleResults(res))
  }

  getPayments(filter?: Array<any>): Observable<Payment> {
    const filters = this.handleFilters(filter);
    return this.http.get(this.basePath + `/payments${filters}`, HTTP_OPTIONS)
      .map((res: any) => this.handleResults(res))
  }

  handleResults(response:any) {
    if(!response.status) {
      throw new Error('This request has failed ' + response.status);
    } else {
      return response.result ? response.result : [];
    }
  }

  handleFilters(filter?: Array<any>) {
    let params = '';
    if(filter && filter.length >= 1){ 
      filter.map((item, index) => {
        if(index === 0) params = params.concat('?');
        params = params.concat(`${item.name}=${item.value}&`)
      });
      params = params.slice(0, -1);
    }
    return params;
  }

}
