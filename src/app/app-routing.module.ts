import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillsComponent } from './bills/bills.component';
import { AddBillsComponent } from './bills/add-bills/add-bills.component';
import { BillListComponent } from './bills/bill-list/bill-list.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { PrintBillsComponent } from './print-bills/print-bills.component';

const routes: Routes = [  { path: 'customer',component:CustomersComponent},
{ path: 'bill',component:BillsComponent},
{ path: 'print',component:PrintBillsComponent},
{ path: '',redirectTo:'/customer', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
