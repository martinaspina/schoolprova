import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExameEditComponent } from './exame-edit.component';
import { ExameEditRoutingModule } from './exame-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExameEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExameEditComponent
  ]
})
export class ExameEditModule { }
