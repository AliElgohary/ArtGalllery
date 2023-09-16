import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PanelComponent } from './panel/panel.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanelComponent,
    AllusersComponent,
    AddproductComponent,
    OrderstatusComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
