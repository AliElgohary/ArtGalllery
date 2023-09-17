import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponentComponent } from './products-component/products-component.component';


@NgModule({
  declarations: [
    ProductsComponentComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
