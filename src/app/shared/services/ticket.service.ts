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
    this.afs.collection<Ticket>(this.collectionName).doc(ticket.id).set(Object.assign({}, ticket));
  }

  readTicketById(id: string) {
    return this.afs.collection<Ticket>(this.collectionName, ref => ref.where('id', '==', id)).valueChanges();
  }

  readTicketsByEmail(email: string) {
    return this.afs.collection<Ticket>(this.collectionName, ref => ref.where('userEmail', '==', email).orderBy('date', 'asc')).valueChanges();
  }

  updateTicket(ticket: Ticket) {
    this.afs.collection<Ticket>(this.collectionName).doc(ticket.id).set(Object.assign({}, ticket));
  }

  deleteTicket(id: string) {
    this.afs.collection<Ticket>(this.collectionName).doc(id).delete();
  }

}
