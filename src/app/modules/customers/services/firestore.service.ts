import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewCustomer(record): any {
    return this.firestore.collection('customers').add(record);
  }

  read_Customers(): any {
    return this.firestore.collection('customers').snapshotChanges();
  }

  update_Customer(recordID, record): any{
    this.firestore.doc('customers/' + recordID).update(record);
  }

  delete_Customer(recordID): any {
    this.firestore.doc('customers/' + recordID).delete();
  }
}