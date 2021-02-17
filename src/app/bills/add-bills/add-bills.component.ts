import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    private customerService: CustomerService) { }


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    // this.billFormData.date=new NepaliDate(new Date);
  }

  onSubmit(form: NgForm) {
    debugger;
    console.log('form date', form.value)
    const data = form.value as Bill;
    data.customerName=this.getCustomerNameById(data.customerId);
    console.log('form date----->>>>>>', data)
    this.billService.saveBillData(data).then(()=>{
      // this.resetForm(form);
      this.toastr.success('Successful!!!!', 'Bill Upload');
    }).catch(()=>{
      this.toastr.error('Failed to save Bill Details',);
    })
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
