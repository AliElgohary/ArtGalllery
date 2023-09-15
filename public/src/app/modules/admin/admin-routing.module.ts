import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { AllusersComponent } from './allusers/allusers.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
  },
  {
    path: 'users',
    component: AllusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
