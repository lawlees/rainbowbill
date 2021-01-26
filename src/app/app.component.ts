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
    this.customerService.getCustomerDetails().subscribe(result=>{
      console.log('Result',result);
    },err=>{
      console.error(err);      
    });
  }
}
