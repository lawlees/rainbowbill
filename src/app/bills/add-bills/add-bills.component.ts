import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public billService:BillService,
    private firestore:AngularFirestore,
    private toastr: ToastrService,
    private customerService: CustomerService) { }

    
    ngOnInit() {
      this.resetForm();
    }

    resetForm(form?: NgForm){
      if(form!=null)
        form.resetForm();
    }

    onSubmit(form:NgForm){
      const data= form.value;
      this.firestore.collection('bill').add(data);
      //this.resetForm(form);
      this.toastr.success('Successful!!!!','Bill Upload');
    }

    getCustomer(){
      this.customerService.getCustomer().subscribe(res=>{
        this.customerList = res;
        this.toastr.success('Fetched customer list','SUCCESSFUL!!!!');
      }, error=>{
        this.toastr.error('Failed to fetch customers'+error,'ERROR!!!!');
      }); 

    }
}
