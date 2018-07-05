import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AsadoAddComponent} from './asado-list/asado-add/asado-add.component';
import {AsadoListComponent} from './asado-list/asado-list.component';


const routes: Routes = [
  { path: 'asado-add', component: AsadoAddComponent },
  { path: 'asado-list', component: AsadoListComponent },
  { path: 'asado-edit', component: AsadoAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
