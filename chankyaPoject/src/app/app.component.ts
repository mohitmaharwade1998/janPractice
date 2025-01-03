import { Component } from '@angular/core'; // import section:where we add dependency classes

@Component({  // component directive section:metadata about component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  // main component class: wher we write code logic
  title = 'chankyaPoject';  //properties
  myName="mohit";
  mySurname:string="maharwade";
  mysurname2?:string;
  // mysurname2:string;

  age!:number;
  


  constructor(){  //constructor: just a normal function but 
  // it will trigger  implicitly by compiler..

  console.log('inside constuctor')
  console.log(this.mysurname2);

  }


  test(){
    this.mysurname2 = 'mmm';
    // console.log(this.mysurname2);
    
  }

  test2(){
    this.test()
  }
}
