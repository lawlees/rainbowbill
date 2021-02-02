import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[] = [];
  constructor(
    private service: CustomerService,
    private toastr: ToastrService) { }

  ngOnInit(){
    this.service.getCustomer().subscribe(customerList=>{
      this.customerList = customerList;
      console.log(customerList);
      this.toastr.success('Fetched customer list','SUCCESSFUL!!!!');
    },error=>{
      this.toastr.error('Failed to fetch customers'+error,'ERROR!!!!');
    });
  }


}
