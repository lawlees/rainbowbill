import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  showBillList: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  show_bill_list() {
    this.showBillList = true;
  }

}
