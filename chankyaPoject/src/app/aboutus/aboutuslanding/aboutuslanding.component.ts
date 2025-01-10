import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-aboutuslanding',
  templateUrl: './aboutuslanding.component.html',
  styleUrls: ['./aboutuslanding.component.scss']
})

export class AboutuslandingComponent {
carName!: string;
  data :any;
  data1:any
  fruit!: string;
  studentname:any
  multi!: number;

constructor(private   dataService:DataService){


//  this.carName=this.dataService.carName

}

ngOnInit(){
  //get and set
  this.carName=this.dataService.carName; //get 

  this.data=this.dataService.data;

  this.dataService.fruits='orange' //set fruit property
}

setdata(){
  this.dataService.fruits='mango'
}


getDataByService(){
this.data1=this.dataService.carName;
this.fruit=this.dataService.fruits
}

getstudentname(){
  this.studentname=this.dataService.getstudentName()
}

setstudentname(){
  let name='priya'
  this.dataService.setstudentName(name)
}

mul(){
 this.multi= this.dataService.multiplication(20,38)
}

}
