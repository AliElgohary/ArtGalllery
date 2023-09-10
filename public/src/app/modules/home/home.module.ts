import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/core/header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
