import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestHomeComponent } from './test-home/test-home.component';
import { TestContactComponent } from './test-contact/test-contact.component';

const routes: Routes = [
  {path:'testhome',component:TestHomeComponent},
  {path:'testcontact',component:TestContactComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
