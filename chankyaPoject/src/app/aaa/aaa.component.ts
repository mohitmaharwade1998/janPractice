import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.component.html',
  styleUrls: ['./aaa.component.scss']
})
export class AaaComponent {
  studentname: any;
  multi:any;
  inputvalue:any

array=[{name:'mmm',age:76,sal:877},{name:'harshi',age:9,sal:44877},
  {name:'shyam',age:6,sal:53437}
]

  constructor(private dataService:DataService){

  }

  getstudentname(){
  this.studentname=this.dataService.getstudentName()
  }

  setstudentname(){
    let name='mohit'
    this.dataService.setstudentName(name)
  }

  mul(){
  this.multi=  this.dataService.multiplication(45,87)
  }

}
