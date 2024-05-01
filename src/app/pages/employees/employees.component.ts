import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
 template:`
 Employee
 `
})
export class EmployeesComponent {
constructor(private activatedRoute:ActivatedRoute){
  activatedRoute.queryParamMap.subscribe({next:query=>{
    console.log( "page:" ,query.get("page"));
    console.log( "size:" ,query.get("size"));
    
  }})
}
}
