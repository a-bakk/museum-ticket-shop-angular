import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../../../shared/models/Ticket';
import { TicketService } from '../../../shared/services/ticket.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() email: string | undefined | null;
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.readTicketsForUser();
  }

  readTicketsForUser() {
    this.ticketService.readTicketsByEmail(this.email as string).subscribe((tickets: Ticket[]) => {
      this.tickets = tickets;
    });
  }
}
