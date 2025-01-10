import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { HomeModule } from './home/home.module';
import { AaaComponent } from './aaa/aaa.component';
import { ApplicationlandingComponent } from './applicationlanding/applicationlanding.component';
import { HeaderComponent } from './header/header.component';

import { DirectiveComponent } from './directive/directive.component';
import { CharactoronlyDirective } from './charactoronly.directive';
import { FormComponent } from './form/form.component';
import { NumberonlyDirective } from './numberonly.directive';
import { SearchTextPipe } from './search-text.pipe';
import { SearchPipe } from './search.pipe';
import { CurruncyPipe } from './curruncy.pipe';
// import { BbbModule } from './bbb/bbb.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatabindingComponent,
    PagenotfoundComponent,
    AaaComponent,
    ApplicationlandingComponent,
    HeaderComponent,
    
    DirectiveComponent,
         CharactoronlyDirective,
         FormComponent,
         NumberonlyDirective,
         SearchTextPipe,
         SearchPipe,
         CurruncyPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HomeModule,
    // BbbModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
