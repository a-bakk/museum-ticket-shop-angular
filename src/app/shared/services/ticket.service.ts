import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Ticket } from '../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  collectionName = 'Tickets';

  constructor(private afs: AngularFirestore) { }

  createTicket(ticket: Ticket) {
    ticket.id = this.afs.createId();
    this.afs.collection<Ticket>(this.collectionName).doc(ticket.id).set(ticket);
  }

  readTicketById(id: number) {
    return this.afs.collection<Ticket>(this.collectionName, ref => ref.where('id', '==', id));
  }

  readTicketsByEmail(email: string) {
    return this.afs.collection<Ticket>(this.collectionName, ref => ref.where('userEmail', '==', email).orderBy('date', 'asc')).valueChanges();
  }

  updateTicket(ticket: Ticket) {
    return this.afs.collection<Ticket>(this.collectionName).doc(ticket.id).set(ticket);
  }

  deleteTicket(id: string) {
    return this.afs.collection<Ticket>(this.collectionName).doc(id).delete();
  }

}
