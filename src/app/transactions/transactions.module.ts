import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsComponent } from './transactions.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { TransactionsRoutingModule } from './transactions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ],
  declarations: [
    TransactionsComponent,
    PaymentDetailsComponent
  ]
})
export class TransactionsModule { }
