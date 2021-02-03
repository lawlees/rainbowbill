import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Bill } from './bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  

  constructor(private firestore: AngularFirestore) { }

  saveBillData(data: Bill){
    return this.firestore.collection('bill').add(data);
  }
}
