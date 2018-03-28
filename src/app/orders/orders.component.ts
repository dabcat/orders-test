import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Order } from '../models/order';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order>;
  searchQuery: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.orders$ = this.api.getOrders();
  }

}
