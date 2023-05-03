import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../shared/models/Ticket';
import { TicketService } from '../../../shared/services/ticket.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() email: string | undefined | null;
  @Output() deleteTicket = new EventEmitter<string>();
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

  onDeleteTicket(ticketId: string) {
    this.deleteTicket.emit(ticketId);
  }
}
