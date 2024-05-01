import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Angular Routing I</h1>
  <a routerLinkActive="active" routerLink="home">Home</a> | 
  <a routerLinkActive="active" routerLink="goto-about/okkk/about">About</a> | 
  <a routerLinkActive="active" routerLink="contact">Contact</a> <br>
  <router-outlet></router-outlet>
  `,
  styles:[".active{color:red;}"]
})
export class AppComponent {
  title = 'DemoApp7';
}
