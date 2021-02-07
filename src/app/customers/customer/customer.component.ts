import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(public customerService: CustomerService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
  }

  onSubmit(form: NgForm) {
    const data = JSON.parse(JSON.stringify(form.value));
    delete data.id
    if (form.value.id == null){
      this.customerService.saveCustomerData(data);
    } else{
      this.firestore.doc('customer/' + form.value.id).update(data);
    }
    this.resetForm(form);
    this.toastr.success('Successful!!!!', 'Customer Registration');
  }
}
