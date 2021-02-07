import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Customer } from './customer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formData: Customer = new Customer;
  customerCollection!: AngularFirestoreCollection<Customer>;
  customerList: Customer[]=[];

  constructor(private firestore:AngularFirestore) { 
    this.customerCollection = this.firestore.collection('customer');
  }

  getCustomer(){
    return this.firestore.collection('customer').snapshotChanges().pipe(map(res=>{
      return res.map(item => {
            const data = item.payload.doc.data() as Customer
            data.id = item.payload.doc.id;
            return data;
          });
    }));
  }

  deleteCustomer(id: string) {
    console.log("delete here"+this.firestore.doc('customer/' + id));
      this.firestore.doc('customer/' + id).delete();
  }

  saveCustomerData(data: Customer){
    return this.firestore.collection('customer').add(data);
  }

  getCustomerName(id:string){
    
  }
  
}