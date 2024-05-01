import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  template:`
  Customer Detail <br>
 <a routerLinkActive="active"  routerLink="customer-orders">CUSTOMER ORDERS</a><br>
 <a  routerLinkActive="active"  routerLink="customer-comments">CUSTOMER COMMENTS</a><br>

  <router-outlet></router-outlet>
  `,
  styles:[".active{color:red;}"]
})
export class CustomerDetailComponent {

}
