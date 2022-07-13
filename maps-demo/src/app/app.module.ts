import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimplyturnBingMapModule } from 'simplyturn-bing-map';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimplyturnBingMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
