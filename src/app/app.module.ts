import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//IMPORTS - INICIO
import {FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
//IMPORTS - FIN

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //IMPORTS - INICIO
    FormsModule, 
    ReactiveFormsModule
    //IMPORTS -FIN
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
