import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifyTicketRoutingModule } from './modify-ticket-routing.module';
import { ModifyTicketComponent } from './modify-ticket.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ModifyTicketComponent
  ],
  imports: [
    CommonModule,
    ModifyTicketRoutingModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ModifyTicketModule { }
