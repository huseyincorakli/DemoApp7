import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  template:`
  Customers Page <br>
 <a routerLink="customer-detail/5000">CUSTOMER 5000</a><br>
  
  <router-outlet></router-outlet>
  `
})
export class CustomersComponent {

}
