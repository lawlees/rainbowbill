import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Bill } from 'src/app/shared/bill.model';
import { BillService } from 'src/app/shared/bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  billList: Bill []= [];

  constructor(
    private billService: BillService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.billService.getBill().subscribe(res=>{
      this.billList=res;
      this.toastr.success('Fetched Bills','SUCCESSFUL!!!!');
    },error=>{
      this.toastr.error("TO Fetch", "FAILED!!!!");
    }
    )
  }

  onEdit(billObj: Bill){
    this.billService.billFormData = Object.assign({}, billObj);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.billService.deleteBill(id);
      this.toastr.warning('Deleted successfully','Bills Details');
    }
  }

  getCustomerName(customerId:String){
    
  }
}
