import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuslandingComponent } from './aboutuslanding/aboutuslanding.component';
import { AboutusdetailsComponent } from './aboutusdetails/aboutusdetails.component';

const routes: Routes = [
  {path:'aboutuslanding',component:AboutuslandingComponent},
  {path:'aboutusdetails',component:AboutusdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
