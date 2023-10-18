import { Component } from '@angular/core';
import { Customer } from './customer.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngOnChanges';
  message = '';
  customer: Customer = new Customer();
  name = 'name';
  code= 0;
  ngOnInit() {
    //console.log('AppComponent:OnInit');
}
 
  updateCustomer() {
    this.customer= new Customer();
    this.customer.name = this.name;
    this.customer.code = this.code;
  }
  AfterContentInit(){
   // console.log("AppComponent:AfterContentInit")
}
ngAfterContentChecked () {
    //console.log("AppComponent:ngAfterContentChecked")
}

ngAfterViewInit () {
   // console.log("AppComponent:ngAfterViewInit")
}

ngAfterViewChecked () {
    //console.log("AppComponent:ngAfterViewChecked")
}

ngOnDestroy () {
    //console.log("AppComponent:ngOnDestroy")
}
}
