import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyTicketComponent } from './modify-ticket.component';

const routes: Routes = [{ path: '', component: ModifyTicketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifyTicketRoutingModule { }
