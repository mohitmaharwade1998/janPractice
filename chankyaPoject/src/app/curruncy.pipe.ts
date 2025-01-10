import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curruncy1'
})
export class CurruncyPipe implements PipeTransform {

  transform(value: any ): any {
    
    // return null;
 console.log(value);


if(!value){
  return null;
}

 
return value * 80; 

  }

}
