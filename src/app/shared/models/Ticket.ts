export class Ticket {
  id: string;
  price: number;
  ticketType: string;
  date: string;
  userEmail: string;
  exhibitionId: string;

  constructor(id: string = '', price: number = 0, ticketType: string = '', date: string = '', userEmail: string = '', exhibitionId: string = '') {
    this.id = id;
    this.price = price;
    this.ticketType = ticketType;
    this.date = date;
    this.userEmail = userEmail;
    this.exhibitionId = exhibitionId;
  }

}
