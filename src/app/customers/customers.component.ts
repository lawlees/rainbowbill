import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  showCustomerList: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  show_customer_list() {
    this.showCustomerList = true;
  }
}
