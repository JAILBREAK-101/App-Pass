import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRouter} from "./app-router.module";
import NavigationBar from "./residents/views/components/navigation/navigation.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    NavigationBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
