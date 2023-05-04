import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../shared/services/ticket.service';
import { Ticket } from '../../shared/models/Ticket';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-ticket',
  templateUrl: './modify-ticket.component.html',
  styleUrls: ['./modify-ticket.component.scss']
})
export class ModifyTicketComponent implements OnInit {

  currentTicketId?: string;
  currentUser?: firebase.default.User | null;
  currentTicket: Ticket = new Ticket();
  modifyTicketForm = new FormGroup({
    modifiedDate: new FormControl(new Date())
  });

  constructor(private route: ActivatedRoute, private location: Location, private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {

    this.modifyTicketForm.get('modifiedDate')?.addValidators([Validators.required]);

    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string) as firebase.default.User;
    this.route.params.subscribe(params => {
      this.currentTicketId = params['currentTicketId'];
      // see if the user owns the ticket
      this.ticketService.readTicketById(this.currentTicketId as string).subscribe((tickets) => {
        this.currentTicket = tickets[0];
        if (this.currentTicket.userEmail != this.currentUser?.email) {
          this.location.back();
        }
      });
    });
  }

  onSubmit() {
    let newDate = this.modifyTicketForm.get('modifiedDate')?.value;
    this.currentTicket.date = newDate.toISOString();
    this.ticketService.updateTicket(this.currentTicket);
    this.router.navigateByUrl('/profile');
  }

  onGoBack() {
    this.location.back();
  }

}
