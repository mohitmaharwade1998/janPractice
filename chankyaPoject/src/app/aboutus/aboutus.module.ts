import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutuslandingComponent } from './aboutuslanding/aboutuslanding.component';

console.log('aboutus');


@NgModule({
  declarations: [
    AboutuslandingComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ]
})
export class AboutusModule { }
