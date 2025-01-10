import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbbRoutingModule } from './bbb-routing.module';
import { AComponent } from './a/a.component';


@NgModule({
  declarations: [
    AComponent
  ],
  imports: [
    CommonModule,
    BbbRoutingModule
  ],
  exports:[
    AComponent,
  ]
})
export class BbbModule { }
