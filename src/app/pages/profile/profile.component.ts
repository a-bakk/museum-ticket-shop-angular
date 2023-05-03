import { Component, OnInit, Input } from '@angular/core';
import { TicketService } from '../../shared/services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser?: firebase.default.User | null;

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string) as firebase.default.User;
  }

  onDeleteTicket(ticketId: string) {
    console.log(ticketId);
    this.ticketService.deleteTicket(ticketId);
    this.router.navigateByUrl('/profile');
  }

}
