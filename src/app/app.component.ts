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
  <p>Guardların çalışma sırası şöyledir: CanMatch - CanActive - CanActiveChild - Resolve - CanDeactivate </p>
  <h3>CanActive : ilgili pathe erişim izni kontrol edilir </h3>
  <h3>CanActiveChild : ilgili pathe erişim izni varsa childına erişim izninin olup olmadığı kontrol edilir </h3>
  <h3>Resolve: Yüklenecek olan componentin içeriğinin yüklenmesini beklemek için kullanılır </h3>
  <h3>CanDeactivate : ilgili pathden kontrollü şekilde çıkılmasını kontrol eder </h3>
  <h3>CanMatch : ilgili pathe erişim izinlerinin kontrol edilerek kontrol sonucunda hangi componentin yükleneceğinin karar verilmesinde kullanılır </h3>
  <hr>
  <h1>Angular Routing IV (Route Data Passing)</h1>
   Bu yöntem sayfalar arası daha temiz, güvenli ve okunaklı şekilde veri taşınmasına olanak sağlar. <br>
   <hr>
  <h1>Angular Router Events V</h1>
 <img src="./assets/events.png" alt="">
  <a routerLinkActive="active" routerLink="home">Home</a> | 
  <a routerLinkActive="active" routerLink="goto-about/okkk/about">About</a> | 
  <a routerLinkActive="active" routerLink="contact">Contact</a> |
  <a routerLinkActive="active" routerLink="products">Products</a> |
  <a routerLinkActive="active" routerLink="posts">Posts</a> |
  <a routerLinkActive="active" routerLink="customers">Customers</a> |
  <a routerLinkActive="active" routerLink="profile">Profile</a> |
  <a routerLinkActive="active" routerLink="calculate" [state]="{dinamicValue1,dinamicValue2}">Calculate</a> |
   <a routerLink="employees" [queryParams]="{page:1,size:size}">Employees</a>
   
  <br>
  
  <router-outlet></router-outlet>
  `,
  styles:[".active{color:red;}"]
})
export class AppComponent {
  title = 'DemoApp7';
  size:number=10;
  dinamicValue1="dValue1";
  dinamicValue2="dValue2";
  
}
