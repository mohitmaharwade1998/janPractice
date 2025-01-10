import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {

 data=[664,76,43,24] 
 myName='mohit'
 disabledvalue=false //true rhi to string intserpolation me brbr kam nhi kregi.
 no=70
surName='maharwade';
name=''

 constructor(){

 }

 test(){
  return 'mohit'
 }

 test2(){
  return this.name
 }

}
