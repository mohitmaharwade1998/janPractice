import { Component } from '@angular/core';
import { DatatestService } from '../datatest.service';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.scss']
})
export class TestHomeComponent {
title:any;

name:any;
inputvalue:any

array=[{name:'mmm',age:76,sal:877},{name:'harshi',age:9,sal:44877},
  {name:'shyam',age:6,sal:53437}
]

  constructor(private datatestService:DatatestService){

  }

  title1=this.datatestService.title

  // ngOnInit(){
  // this.title=this.datatestService.title
  // }

  test(){
    this.name=this.datatestService.title
  }
// getstudentname(){
//   this.d
// }


}
