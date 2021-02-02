import { Customer } from "./customer.model";

export class Bill {
    date?:string;
    quantity?:number;
    billNumber?:number;
    customerId?:Customer;
}
