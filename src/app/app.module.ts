import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRouter} from "./app-router.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
