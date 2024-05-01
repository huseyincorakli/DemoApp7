import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
 template:`
 <p *ngIf="hasId">Product {{id}}</p>
 <p *ngIf="!hasId">
 Products <br>
 <a routerLink="123">A</a> <br>
 <a routerLink="231">B</a><br>
 <a routerLink="412">C</a><br>
</p>
 `
})
export class ProductsComponent {
  hasId:boolean=false;
  id:any;
constructor(private activatedRoute:ActivatedRoute){
  // this.hasId = activatedRoute.snapshot.paramMap.has("id");
 activatedRoute.paramMap.subscribe({next:parameter=>{
    this.hasId= parameter.has("id")
  }})
  if (this.hasId) {
    // this.id= activatedRoute.snapshot.paramMap.get("id")
    activatedRoute.paramMap.subscribe({next:parameter=>{
      this.id= parameter.get("id")
    }})
  }
}
}
