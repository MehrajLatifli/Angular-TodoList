import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componentname1Component } from './componentname1/componentname1.component';
import { Componentname2Component } from './componentname2/componentname2.component';
import { Componentname3Component } from './componentname3/componentname3.component';
import { Componentname4Component } from './componentname4/componentname4.component';

@NgModule({
  declarations: [
    AppComponent,
    Componentname1Component,
    Componentname2Component,
    Componentname3Component,
    Componentname4Component
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
