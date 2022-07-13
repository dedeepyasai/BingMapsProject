import { AfterViewInit, Component, Input, OnChanges } from '@angular/core';
import { initialize, whenLoaded } from 'bing-maps-loader';
import 'bingmaps';
@Component({
  selector: 'lib-simplyturn-bing-map',
  template: `<div id="map"></div>`,
  styles: [],
})
export class SimplyturnBingMapComponent implements OnChanges, AfterViewInit {
  @Input() API_KEY: any;
  @Input() randomNumber: any;
  constructor() {
  }

  ngOnChanges() {}

  ngAfterViewInit() {
    initialize(this.API_KEY);
    this.addPinToNewMap();
  }

  addPinToNewMap() {
    let mapId: any = document.getElementById('map');
    // whenLoaded will resolve when the Map library is loaded
    whenLoaded.then(() => {
      var map = new Microsoft.Maps.Map(mapId, {
        /* No need to set credentials if already passed in URL */
      });

      // Generate an array of random pushpins within current map bounds
      var pushpins = Microsoft.Maps.TestDataGenerator.getPushpins(
        this.randomNumber,
        map.getBounds()
      );
      var layer = new Microsoft.Maps.Layer();
      layer.add(pushpins);
      map.layers.insert(layer);
    });
  }
}
