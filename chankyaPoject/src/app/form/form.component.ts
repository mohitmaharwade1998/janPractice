import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  title='my WEb AppLication';
  todayDate='04-01-2025';
  today= new Date();
  today1=this.today.toLocaleDateString();
  today2=this.today.toLocaleString();
  today3!:any;
  day!:any;
  Month!:any;
  year!:any;
  inputboxValue:any;
  amount!:number

  employee=[
    {name:'mohit',age:34,salary:40000},
    {name:'raj',age:43,salary:60000},
    {name:'rohit',age:55,salary:50000}
  ]
  date!: string;

  ngOnInit(){
 this.dateFormate()
  }

  dateFormate(){
  this.day=this.today.getDate()
  this.Month = this.today.getMonth()+1;
  this.year = this.today.getFullYear();
  this.date=(this.day+'-'+this.Month+"="+this.year)



  this.today3=this.today.toLocaleDateString()
  }

}
