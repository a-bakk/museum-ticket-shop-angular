import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifyTicketRoutingModule } from './modify-ticket-routing.module';
import { ModifyTicketComponent } from './modify-ticket.component';


@NgModule({
  declarations: [
    ModifyTicketComponent
  ],
  imports: [
    CommonModule,
    ModifyTicketRoutingModule
  ]
})
export class ModifyTicketModule { }
