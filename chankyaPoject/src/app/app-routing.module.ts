import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { AaaComponent } from './aaa/aaa.component';
import { AComponent } from './bbb/a/a.component';
import { AboutusModule } from './aboutus/aboutus.module';
import { ApplicationlandingComponent } from './applicationlanding/applicationlanding.component';
import { HeaderComponent } from './header/header.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  // {path:'',component:ApplicationlandingComponent},
  // {path:'',component:HeaderComponent},
  {path:'user', component:UserComponent},
  {path:'databinding', component:DatabindingComponent},
  // {path:'homeComponent', component:HomeComponent},
  // {path:'landingcomponent', component:LandingComponent},
  {path:'aaa', component:AaaComponent},
  {path:'a',component:AComponent},
  {path:'directive',component:DirectiveComponent},
  {path:'form',component:FormComponent},
//lazy loading

{path:'home', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
{path:'bmodule' , loadChildren:()=>import('./bbb/bbb.module').then(m=>m.BbbModule)},
{path:'aboutus',loadChildren:()=>import('./aboutus/aboutus.module').then(m=>m.AboutusModule)},
{path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
{path:'test',loadChildren:()=>import('./test/test.module').then(m=>m.TestModule)},
{path:'form',loadChildren:()=>import('./angularforms/angularforms.module').then(m=>m.AngularformsModule)},

 {path:'**',component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
