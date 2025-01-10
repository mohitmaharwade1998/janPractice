import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';


@NgModule({
  declarations: [
    ReactiveformComponent,
    TemplatedrivenComponent
  ],
  imports: [
    CommonModule,
    AngularformsRoutingModule
  ]
})
export class AngularformsModule { }
