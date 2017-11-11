import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddIngridientComponent } from './add-ingridient/add-ingridient.component';


@NgModule({
  declarations: [
    AppComponent,
    AddIngridientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
