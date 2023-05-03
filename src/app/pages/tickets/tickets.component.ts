import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Exhibition } from '../../shared/models/Exhibition';
import { ExhibitionService } from '../../shared/services/exhibition.service';
import { TicketService } from '../../shared/services/ticket.service';
import { Ticket } from 'src/app/shared/models/Ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  exhibitions: Exhibition[] = [];

  currentUser?: firebase.default.User | null;

  ticketForm = new FormGroup({
    exhibition: new FormControl(null),
    fullPrice: new FormControl(''),
    halfPrice: new FormControl(''),
    ticketDate: new FormControl(new Date())
  });

  constructor(private exhibitionService: ExhibitionService, private router: Router, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.readExhibitions();

    this.ticketForm.get('exhibition')?.addValidators([Validators.required]);
    this.ticketForm.get('fullPrice')?.addValidators([Validators.required]);
    this.ticketForm.get('halfPrice')?.addValidators([Validators.required]);
    this.ticketForm.get('ticketDate')?.addValidators([Validators.required]);

    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string) as firebase.default.User;

    console.log('asd-2');
  }

  readExhibitions() {
    this.exhibitionService.readAllExhibitions().subscribe((exhibitions: Exhibition[]) => {
      this.exhibitions = exhibitions;
    });
  }

  onSubmit() {
    console.log('asd-1');
    if (this.ticketForm.valid) {
      let fullPrice = this.ticketForm.get('fullPrice')?.value as number;
      let halfPrice = this.ticketForm.get('halfPrice')?.value as number;
      console.log(fullPrice);
      console.log(halfPrice);

      while (fullPrice > 0) {
        this.createTicket(40, 'full price', this.ticketForm.get('ticketDate')?.value, this.ticketForm.get('exhibition')?.value);
        fullPrice--;
      }

      while (halfPrice > 0) {
        this.createTicket(20, 'half price', this.ticketForm.get('ticketDate')?.value, this.ticketForm.get('exhibition')?.value);
        halfPrice--;
      }

      this.router.navigateByUrl('/profile');
    }
  }

  createTicket(price: number, ticketType: string, date: Date, exhibition: Exhibition) {
    let ticket = new Ticket();
    ticket.userEmail = this.currentUser?.email as string;
    ticket.exhibitionId = exhibition.id;
    ticket.price = price;
    ticket.ticketType = ticketType;
    ticket.date = date.toISOString();

    this.ticketService.createTicket(ticket);
  }

}
