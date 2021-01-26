import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private angFirestore : AngularFirestore) { }

  getCustomerDetails(){
  return this.angFirestore.collection('Customer').snapshotChanges();
}
saveCustomerDetails(){
  return this.angFirestore.collection('Customer').snapshotChanges();
}
}
