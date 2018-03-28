import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule
  ],
  declarations: [
    OrdersComponent,
    SearchPipe
  ]
})
export class OrdersModule { }
