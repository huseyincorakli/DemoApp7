import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  template:`
  Posts <br>
  <ul>
    <li *ngFor="let a  of datas"> {{a.title}}</li>
  </ul>
  `
})
export class PostsComponent  implements OnInit{
  datas:any;
  photos:any;

  constructor(private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((posts:any)=>this.datas=posts["posts"])
  }

}
