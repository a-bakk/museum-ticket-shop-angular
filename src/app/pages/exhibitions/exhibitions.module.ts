import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { ExhibitionsRoutingModule } from './exhibitions-routing.module';
import { ExhibitionsComponent } from './exhibitions.component';


@NgModule({
  declarations: [
    ExhibitionsComponent
  ],
  imports: [
    CommonModule,
    ExhibitionsRoutingModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class ExhibitionsModule { }
