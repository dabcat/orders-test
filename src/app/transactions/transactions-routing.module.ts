import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
    {
        path: '',
        component: TransactionsComponent
    },
    {
        path:':id',
        component: PaymentDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
