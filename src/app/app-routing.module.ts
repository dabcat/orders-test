import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'orders',
        loadChildren: 'app/orders/orders.module#OrdersModule'
    },
    {
        path: 'transactions',
        loadChildren: 'app/transactions/transactions.module#TransactionsModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
