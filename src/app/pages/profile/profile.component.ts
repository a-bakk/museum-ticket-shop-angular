import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../shared/services/ticket.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser?: firebase.default.User | null;

  constructor(private ticketService: TicketService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getloggedInUser().subscribe(user => {
      this.currentUser = user;
    })
  }

  onDeleteTicket(ticketId: string) {
    console.log(ticketId);
    this.ticketService.deleteTicket(ticketId);
    this.router.navigateByUrl('/profile');
  }

  onModifyTicket(ticketId: string) {
    this.router.navigate(['/modify-ticket', { currentTicketId: ticketId }]);
  }

}
