import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent {
  para = 98
  // para:any,'',fallse,undefined  -not takken
  // para=1/'mm'
  // para:boolean=true/false/undefined
  para2: any = 7;
  hi: any = 'kk';
  mmm: any = 98;
  bb=9;
  color1:any='white'

  // show:any=true
  show: any
  items = [10, 20, 30, 40, 50];

  color: any = 'green';

  style_property = 'main2';

  stylep='main3'

  style_propertyNew :any='hj';
  // style_propertyNew=20;
  //esme empty string "" aise b rkhe to as  a value consider nhi  krega;

 name='maharwade'
  // multipleStyle='poonam';
  multipleStyle = 'patil'




  student = [
    {
      name: 'raj',
      age: 20,
      hobby: 'painting'
    },
    {
      name: 'rupa',
      age: 25,
      hobby: 'dancing'
    },
    {
      name: 'ram',
      age: 90,
      hobby: 'sketingng'
    },
    {
      name: 'ravi',
      age: 22,
      hobby: 'singing'
    }
  ];
  studentdata: any =9;

  obj=[{name:'mmm',age:88,mob:8767},
         {name:'mmm',age:88,mob:8767}
  ]
  // inlineCss='';
  inlineCss = 'orange';

  // headingProperty:any=20
  headingProperty: any

  // myImg='C:/Users/user/Desktop/my pro practice/amazon/src/assets/images1/mohit.png'


  // img(){
  //  return this.myImg


  // }

  p1() {
    this.para2 = false
  }
  p2() {
    this.para2 = true
  }


  showhidepara(a: any) {
    this.hi = a;
  }

  togglemmm() {
    this.mmm = !this.mmm;
  }

  // hideDiv(){
  //   this.show=false
  // }

  //or

  hideShowDiv(value: boolean) {
    this.show = value
  }



  showDiv() {
    this.show = true

  }

  toggle() {
    this.show = !this.show
  }

  switchColors(c: any) {
    this.color = c
  }

switchcolor(item:any){
  this.color1=item
}

changecolor(it:any){
this.color1=it
}

  setclass(): any {
    return 'main';
  }
t(){
  return 'main2'
}
}
