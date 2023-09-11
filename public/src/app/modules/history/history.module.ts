import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
