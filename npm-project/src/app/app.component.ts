import { Component } from '@angular/core';
import { initialize, whenLoaded } from 'bing-maps-loader';
import 'bingmaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bing-map-demo';
  randomNumber: any = 5;
  constructor() {}
}
