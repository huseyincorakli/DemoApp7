import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template:`
  About Page
  <a routerLink="/calculate" [state]="{d1,d2}">Calculate</a>
  `
})
export class AboutComponent {
d1="abc"
d2="xyz"
}
