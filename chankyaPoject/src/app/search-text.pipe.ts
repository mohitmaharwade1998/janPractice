import { Pipe, PipeTransform } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {


  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }


  // transform(value: unknown,===it will return hole array ...args: unknown[]==esme input box ki value aayegi): unknown {
  //   return null;
  // }

  transform(arrayOfObject: any, inputBoxsearchvalue: any): any {
    console.log("arrayOfObject", arrayOfObject);
    console.log("inputBoxsearchvalue", inputBoxsearchvalue);

    // if (!arrayOfObject) {
    //   return null;
    // }

    // if (!inputBoxsearchvalue) {
    //   return arrayOfObject;
    // }

    // inputBoxsearchvalue = inputBoxsearchvalue.toLowerCase();
    //  return arrayOfObject.filter((item:any)=>{
    //  return JSON.stringify(item).includes(inputBoxsearchvalue)
    // }) 

   
    if(!arrayOfObject){
      return null

    }

    if(!inputBoxsearchvalue){
      return arrayOfObject ;
    }
   
    inputBoxsearchvalue = inputBoxsearchvalue.toLowerCase();
    return arrayOfObject.filter((item:any)=>{
     return   JSON.stringify(item).includes(inputBoxsearchvalue)
    })


   }

  // inputBoxsearchvalue = this.inputBoxsearchvalue.toLowerCase();


}
