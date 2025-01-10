import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  inputValue: any;
  
  array=[33,44,34,3]

  inputBoxvalue: any;
  adrres: any;
  
  abcd: any;
  mmm: any;

  arrayItem=[1,2,5,'dd'];
  obj={
    name:'mohit',
    age:20
  }
  checkboxvalue: any;
  checkvalue:any
  oop: any;
  sss: any;
  mo: any;
  arrayItemCopy: any=[];
 
  arryaHetro=['mohit',555,true,'ghjk',5]

  constructor(){
    this.arraytest()
  }

  myFunction(value: any) {
    this.inputValue = value
  }


  func(item: any) {

    console.log("mouseov")
  }

  myfunction(value:any){
    this.inputBoxvalue=value

  }
  
  add(abc:any){
    this.adrres=abc
  }

  myname1(value:any){
    this.abcd=value

  }


  
blurEvent(){
  console.log('blurevent');
  
}

  over(a:any){
    console.log("inside over")
  }


  mm(data:any){
    console.log('data',data.target.value);
    
    this.mmm=data.target.value
}


  over1(){
    console.log('outside over');
    
  }

  out(){
    console.log('out ghjk');
    
  }

  checkboxevent(){
    
    console.log('checkbox');
    
  }

  checkbox(event:any){
    console.log(event);
    
    console.log('event',event.target.value);
    
    this.checkboxvalue=event.value
    

  }
  checkbox2(event:any){
   
    
    console.log('event',event.value);
    this.checkboxvalue=event.value
    

  }
  checkbox1(event:any){
    console.log('event',event.target.value);
    this.checkvalue=event.target.value;
    

  }


  // oo(data:any){
  //   this.oop=data.target.value
  //   console.log(data);
  //   console.log(data.target.value);
    

  // }

  // ppp(){
  //   console.log('rsdf');
    
  // }
  
  // name1(){
  //   console.log('checkedd');
    
  // }


check1(data:any){
  this.sss=data.target.value
  console.log(data.target.value)
  console.log(data)

}

mohit(m:any){
  this.mo=m.value
  console.log(m.value)
}

// ngOnInit(){
//   this.arraytest()
// }

arraytest(){

  this.arrayItem.forEach(item=>{
    this.arrayItemCopy.push(item)
  })


  // for(let i=0; i<this.arrayItem.length;i++){
  //   this.arrayItemCopy.push(this.arrayItem[i])
  // }
}

// a(){
//   this.arraytest()
// }



}
