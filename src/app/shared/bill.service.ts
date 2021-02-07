import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Bill } from './bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  billFormData: Bill = new Bill;

  constructor(private firestore: AngularFirestore) { }

  getBill(){
    return this.firestore.collection('bill').snapshotChanges().pipe(map(res=>{
      return res.map(item => {
            const data = item.payload.doc.data() as Bill
            data.id = item.payload.doc.id;
            return data;
          });
    }));
  }

  saveBillData(data: Bill){
    return this.firestore.collection('bill').add(data);
  }

  deleteBill(id: string) {
    console.log("delete here"+this.firestore.doc('bill/' + id));
      this.firestore.doc('bill/' + id).delete();
  }
}
