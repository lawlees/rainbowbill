import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formData: Customer = new Customer;
  customerCollection!: AngularFirestoreCollection<Customer>;
  customerList!: Observable<Customer[]>;

  constructor(private firestore:AngularFirestore) { 
    this.customerCollection = this.firestore.collection('customer');
  }

  getCustomer(){
    return this.customerCollection.valueChanges();
  }

  saveCustomer(){
  }
}
