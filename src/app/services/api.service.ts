import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

import { Order } from '../models/order';
import { Transaction } from '../models/transaction';
import { Payment } from '../models/payment';
import { ApiFilter } from '../models/api-filter';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {
  basePath: string;

  constructor(private http: HttpClient) {
    this.basePath = environment.apiBasePath;
  }

  getOrders(filter?: Array<ApiFilter>): Observable<Order> {
    const filters = this.handleFilters(filter);
    return this.http.get(this.basePath + `/orders${filters}`, HTTP_OPTIONS).pipe(
      map((res: any) => this.handleResults(res)),
      catchError(this.handleError('getOrders', []))
    )
  }

  getTransactions(filter?: Array<ApiFilter>): Observable<Transaction> {
    const filters = this.handleFilters(filter);
    return this.http.get(this.basePath + `/transactions${filters}`, HTTP_OPTIONS).pipe(
      map((res: any) => this.handleResults(res)),
      catchError(this.handleError('getTransactions', []))
    )
  }

  getPayments(filter?: Array<ApiFilter>): Observable<Payment> {
    const filters = this.handleFilters(filter);
    return this.http.get(this.basePath + `/payments${filters}`, HTTP_OPTIONS).pipe(
      map((res: any) => this.handleResults(res)),
      catchError(this.handleError('getPayments', []))
    )
  }

  private handleResults(response:any) {
    return response.result ? response.result : [];
  }

  private handleFilters(filter?: Array<ApiFilter>) {
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

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
