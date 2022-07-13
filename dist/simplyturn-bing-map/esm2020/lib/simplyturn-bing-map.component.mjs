import { Component, Input } from '@angular/core';
import { initialize, whenLoaded } from 'bing-maps-loader';
import 'bingmaps';
import * as i0 from "@angular/core";
export class SimplyturnBingMapComponent {
    constructor() {
    }
    ngOnChanges() { }
    ngAfterViewInit() {
        initialize(this.API_KEY);
        this.addPinToNewMap();
    }
    addPinToNewMap() {
        let mapId = document.getElementById('map');
        // whenLoaded will resolve when the Map library is loaded
        whenLoaded.then(() => {
            var map = new Microsoft.Maps.Map(mapId, {
            /* No need to set credentials if already passed in URL */
            });
            // Generate an array of random pushpins within current map bounds
            var pushpins = Microsoft.Maps.TestDataGenerator.getPushpins(this.randomNumber, map.getBounds());
            var layer = new Microsoft.Maps.Layer();
            layer.add(pushpins);
            map.layers.insert(layer);
        });
    }
}
SimplyturnBingMapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SimplyturnBingMapComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SimplyturnBingMapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: SimplyturnBingMapComponent, selector: "lib-simplyturn-bing-map", inputs: { API_KEY: "API_KEY", randomNumber: "randomNumber" }, usesOnChanges: true, ngImport: i0, template: `<div id="map"></div>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SimplyturnBingMapComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-simplyturn-bing-map',
                    template: `<div id="map"></div>`,
                    styles: [],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { API_KEY: [{
                type: Input
            }], randomNumber: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGx5dHVybi1iaW5nLW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zaW1wbHl0dXJuLWJpbmctbWFwL3NyYy9saWIvc2ltcGx5dHVybi1iaW5nLW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUQsT0FBTyxVQUFVLENBQUM7O0FBTWxCLE1BQU0sT0FBTywwQkFBMEI7SUFHckM7SUFDQSxDQUFDO0lBRUQsV0FBVyxLQUFJLENBQUM7SUFFaEIsZUFBZTtRQUNiLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxLQUFLLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCx5REFBeUQ7UUFDekQsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDdEMseURBQXlEO2FBQzFELENBQUMsQ0FBQztZQUVILGlFQUFpRTtZQUNqRSxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FDekQsSUFBSSxDQUFDLFlBQVksRUFDakIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUNoQixDQUFDO1lBQ0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt3SEE5QlUsMEJBQTBCOzRHQUExQiwwQkFBMEIsa0pBSDNCLHNCQUFzQjs0RkFHckIsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLE1BQU0sRUFBRSxFQUFFO2lCQUNYOzBFQUVVLE9BQU87c0JBQWYsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpbml0aWFsaXplLCB3aGVuTG9hZGVkIH0gZnJvbSAnYmluZy1tYXBzLWxvYWRlcic7XG5pbXBvcnQgJ2JpbmdtYXBzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zaW1wbHl0dXJuLWJpbmctbWFwJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+YCxcbiAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGx5dHVybkJpbmdNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBBUElfS0VZOiBhbnk7XG4gIEBJbnB1dCgpIHJhbmRvbU51bWJlcjogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaW5pdGlhbGl6ZSh0aGlzLkFQSV9LRVkpO1xuICAgIHRoaXMuYWRkUGluVG9OZXdNYXAoKTtcbiAgfVxuXG4gIGFkZFBpblRvTmV3TWFwKCkge1xuICAgIGxldCBtYXBJZDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpO1xuICAgIC8vIHdoZW5Mb2FkZWQgd2lsbCByZXNvbHZlIHdoZW4gdGhlIE1hcCBsaWJyYXJ5IGlzIGxvYWRlZFxuICAgIHdoZW5Mb2FkZWQudGhlbigoKSA9PiB7XG4gICAgICB2YXIgbWFwID0gbmV3IE1pY3Jvc29mdC5NYXBzLk1hcChtYXBJZCwge1xuICAgICAgICAvKiBObyBuZWVkIHRvIHNldCBjcmVkZW50aWFscyBpZiBhbHJlYWR5IHBhc3NlZCBpbiBVUkwgKi9cbiAgICAgIH0pO1xuXG4gICAgICAvLyBHZW5lcmF0ZSBhbiBhcnJheSBvZiByYW5kb20gcHVzaHBpbnMgd2l0aGluIGN1cnJlbnQgbWFwIGJvdW5kc1xuICAgICAgdmFyIHB1c2hwaW5zID0gTWljcm9zb2Z0Lk1hcHMuVGVzdERhdGFHZW5lcmF0b3IuZ2V0UHVzaHBpbnMoXG4gICAgICAgIHRoaXMucmFuZG9tTnVtYmVyLFxuICAgICAgICBtYXAuZ2V0Qm91bmRzKClcbiAgICAgICk7XG4gICAgICB2YXIgbGF5ZXIgPSBuZXcgTWljcm9zb2Z0Lk1hcHMuTGF5ZXIoKTtcbiAgICAgIGxheWVyLmFkZChwdXNocGlucyk7XG4gICAgICBtYXAubGF5ZXJzLmluc2VydChsYXllcik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==