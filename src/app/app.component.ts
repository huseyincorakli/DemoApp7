import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Angular Routing I</h1>
  <p>Angular da route yapılanması app-routing.modulde gerçekleştirilir. (Ayrı bir dosyada tutmak için forRoot ve RouteModule çağrılmalı)</p> 
  <p ngNonBindable> <code>{{'{ path: ''home'', component: HomeComponent }'}}</code> </p>
  <p>Her bir routea ait link oluşturulurken <code>routerLink</code> directivinden yararlanılır.</p>
  <p>O routea ait active class vermek için <code>routerLinkActive</code> directive kullanılır</p> 
  <p>Her bir route, routes dizisinde yukarıdaki gibi tanımlanır. </p>
  <p>Route parametrelerini okumak için ActivatedRoute nesnesini inject ederek elde edebiliriz</p>
  <hr>
  <h1>Angular Routing II</h1>
  QueryParamsHandler directive ile bir routedan diğerine giderken queryleri taşıya biliriz: preserve de gidilen routtadki queryler ezilip geldiğimiz routtaki <br>
  queryler yerleştirelecektir, merge de ise her iki routedaki queryler birleştirilecektir. <br>
  <hr>
  <h1>Angular Routing III (Guard)</h1>

  <a routerLinkActive="active" routerLink="home">Home</a> | 
  <a routerLinkActive="active" routerLink="goto-about/okkk/about">About</a> | 
  <a routerLinkActive="active" routerLink="contact">Contact</a> |
  <a routerLinkActive="active" routerLink="products">Products</a> |
  <a routerLinkActive="active" routerLink="customers">Customers</a> |
   <a routerLink="employees" [queryParams]="{page:1,size:size}">Employees</a>
   
  <br>
  
  <router-outlet></router-outlet>
  `,
  styles:[".active{color:red;}"]
})
export class AppComponent {
  title = 'DemoApp7';
  size:number=10;
  
}
