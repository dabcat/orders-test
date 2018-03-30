import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  imports: [
    SharedModule,
    OrdersRoutingModule
  ],
  declarations: [
    OrdersComponent,
    SearchPipe
  ]
})
export class OrdersModule { }
