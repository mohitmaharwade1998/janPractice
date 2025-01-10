import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrayitem: any,inputvalue: any): any{
  
    if(!arrayitem){
      return null;
    }
    if(!inputvalue){
      return arrayitem
    }

    inputvalue=inputvalue.toLowerCase();
  return  arrayitem.filter((item: any)=>{
      return JSON.stringify(item).includes(inputvalue)
    })

  }

}
