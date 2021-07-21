import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExameEditComponent } from './exame-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExameEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExameEditRoutingModule { }
