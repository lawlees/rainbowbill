import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerService } from './shared/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BillsComponent } from './bills/bills.component';
import { AddBillsComponent } from './bills/add-bills/add-bills.component';
import { NpDatepickerModule } from 'angular-nepali-datepicker';
import { BillListComponent } from './bills/bill-list/bill-list.component';
import { PrintBillsComponent } from './print-bills/print-bills.component';
import { BillService } from './shared/bill.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerListComponent,
    NavBarComponent,
    BillsComponent,
    AddBillsComponent,
    BillListComponent,
    PrintBillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NpDatepickerModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
    
  ],
  providers: [CustomerService, BillService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
