import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { TransactionsComponent } from './transactions.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { TransactionsRoutingModule } from './transactions-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TransactionsRoutingModule
  ],
  declarations: [
    TransactionsComponent,
    PaymentDetailsComponent
  ]
})
export class TransactionsModule { }
