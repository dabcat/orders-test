import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'orders',
        loadChildren: 'app/orders/orders.module#OrdersModule',
        data: { pageTitle: 'Orders Page'}
    },
    {
        path: 'transactions',
        loadChildren: 'app/transactions/transactions.module#TransactionsModule',
        data: { pageTitle: 'Transactions page'}
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        data: { pageTitle: 'Homepage :)'}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
