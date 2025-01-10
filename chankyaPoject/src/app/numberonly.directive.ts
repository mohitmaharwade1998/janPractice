import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {

  initialinputValue: any;

  constructor(private elementRef:ElementRef) {

   }

   @HostListener('input',["$event"])

   function(){
    this.initialinputValue = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = this.initialinputValue.replace(/[^0-9]$/g,'')
   }



}
