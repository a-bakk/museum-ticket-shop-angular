import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Exhibition } from '../models/Exhibition';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  collectionName = 'Exhibitions';

  constructor(private afs: AngularFirestore) { }

  readExhibitionById(id: string) {
    return this.afs.collection<Exhibition>(this.collectionName, ref => ref.where('id', '==', id)).valueChanges();
  }

  readAllExhibitions() {
    return this.afs.collection<Exhibition>(this.collectionName, ref => ref.where('descriptionLength', '<=', 200).orderBy('descriptionLength', 'asc').orderBy('openFrom', 'desc').limit(5)).valueChanges();
  }

}
