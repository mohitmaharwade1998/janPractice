import { Component } from '@angular/core'; // import section:where we add dependency classes
import { Router } from '@angular/router';


@Component({  // component directive section:metadata about component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  // main component class: wher we write code logic.
 public title = 'chankyaPoject';  //properties
  myName="mohit";
  mySurname:string="maharwade";
  mysurname2?:string;
  // mysurname2:string;

  age!:number;
 test1:any=56;



  constructor(private router:Router){  //constructor: just a normal function but 
  // it will trigger  implicitly by compiler..

 

  console.log('inside constuctor')
  console.log(this.mysurname2,"hj");

  this.test()
  // this.test2()


  }


  public test(){
    this.mysurname2 = 'mmm';
    // console.log(this.mysurname2);
    
  }
  // test()

  test2(){
    this.test()
    this.myName=this.mySurname;
  }

  admin(){
   this.router.navigateByUrl('/admin')
  }


}
