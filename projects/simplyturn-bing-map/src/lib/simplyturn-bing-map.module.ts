import { NgModule } from '@angular/core';
import { SimplyturnBingMapComponent } from './simplyturn-bing-map.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SimplyturnBingMapComponent],
  imports: [BrowserModule, FormsModule], 
  exports: [SimplyturnBingMapComponent],
})
export class SimplyturnBingMapModule {}
