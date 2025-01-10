import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharactoronly]'
})
export class CharactoronlyDirective {

  


  constructor(private elementRef:ElementRef) { 
    
  console.log('directive');

  }

  @HostListener('input',["$event"])
  
  oninputBoxChange(event:any){
    console.log('charactordirective');

    var inputboxInitialValue = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = inputboxInitialValue.replace(/[^a-zA-Z]$/g,'')

  }



}
