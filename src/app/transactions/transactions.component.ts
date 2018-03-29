import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions$: Observable<any>;
  title: string;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.transactions$ = this.api.getTransactions();
    this.route.data.subscribe(data => {
      this.title = data.pageTitle;
    })
  }

}
