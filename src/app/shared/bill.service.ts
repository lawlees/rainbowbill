import { Injectable } from '@angular/core';
import { Bill } from './bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  billFormData: Bill = new Bill;
  

  constructor() { }
}
