import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    OrderComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
