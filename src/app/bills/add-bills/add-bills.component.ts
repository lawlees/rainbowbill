import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { NepaliDate } from 'angular-nepali-datepicker';
import { ToastrService } from 'ngx-toastr';
import { Bill } from 'src/app/shared/bill.model';
import { BillService } from 'src/app/shared/bill.service';
import { Customer } from 'src/app/shared/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-add-bills',
  templateUrl: './add-bills.component.html',
  styleUrls: ['./add-bills.component.scss']
})
export class AddBillsComponent implements OnInit {

  customerList: Customer[] = [];
  selectedCustomer: Customer = new Customer;
  billFormData: Bill = new Bill;
  selectedCustomerName: String | undefined;
  constructor(private billService: BillService,
    private toastr: ToastrService,
    private customerService: CustomerService,
    private firestore: AngularFirestore) { }


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
     // this.billFormData.date=new NepaliDate(new Date);
  }

  onSubmit(form: NgForm) {
    const data = JSON.parse(JSON.stringify(form.value as Bill));
    delete data.id
    if (form.value.id == null){
      data.customerName=this.getCustomerNameById(data.customerId);
      this.billService.saveBillData(data);
    } else{
      this.firestore.doc('bill/' + form.value.id).update(data);
    }
    this.resetForm(form);
    this.toastr.success('Successful!!!!', 'Customer Registration');
  }
   
  getCustomer() {
    if (this.customerList.length>0)
      return;
    this.customerService.getCustomer().subscribe(res => {
      this.customerList = res;
      this.toastr.success('Fetched customer list', 'SUCCESSFUL!!!!');
    }, error => {
      this.toastr.error('Failed to fetch customers' + error, 'ERROR!!!!');
    });

  }

  getCustomerNameById(id: any){
    console.log(this.customerList);
    for (let i = 0; i < this.customerList.length; i++) {
      if(id=== this.customerList[i].id){
        this.selectedCustomerName= this.customerList[i].name;
      console.log ("Block statement execution no." + i);
    }
  }
  return this.selectedCustomerName;
}
}
