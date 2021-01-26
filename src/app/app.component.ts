import { Component } from '@angular/core';
import { CustomerService } from './services/customer.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rainbowbill';

  constructor(private customerService : CustomerService){}

  ngOnInit(){
    alert("inside click_button method");
    this.customerService.getCustomerDetails().subscribe(result=>{
      console.log(result);
    },err=>{
      console.error(err);
      
    });
  }
}
