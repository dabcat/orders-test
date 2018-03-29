import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuItems$: Observable<any>;

  constructor(private route: ActivatedRoute) {
    this.menuItems$ = Observable.of([
      {
        label: 'Home',
        route: ''
      },
      {
        label: 'All Orders',
        route: 'orders'
      },
      {
        label: 'All Transactions',
        route: 'transactions'
      }
    ])
  }

  ngOnInit() {

  }
}
