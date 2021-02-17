import { NepaliDate } from "angular-nepali-datepicker";

export class Bill {
    id:string;
    date?:NepaliDate;
    quantity?:number;
    billNumber?:number;
    customerId?:String;
    customerName?:String;
}
