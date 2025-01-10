import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  data={name:'mohit',age:24,mobno:9876};
  carName='jagure';
  fruits!:string;
  title='my fisrt web';
  studentname:any='raj'

  constructor() { }

  function() {
    return this.title
  }

  //alternate way to get or set value

  // student={
  //   name:'mohit',
  //   age:87,
  //   monNo:9877889
  // }

  getstudentName(){
   return this.studentname
  }

  setstudentName(name:any){
    this.studentname=name
    
  }


  multiplication(num1:any,num2:any){
  return num1 * num2
  }

}
