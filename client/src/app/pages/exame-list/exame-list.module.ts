import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExameListComponent } from './exame-list.component';
import { ExameListRoutingModule } from './exame-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExameListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExameListComponent
  ]
})
export class ExameListModule { }
