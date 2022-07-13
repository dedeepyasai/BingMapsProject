import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import { initialize, whenLoaded } from 'bing-maps-loader';
import 'bingmaps';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

class SimplyturnBingMapService {
    constructor() { }
}
SimplyturnBingMapService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SimplyturnBingMapService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SimplyturnBingMapService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SimplyturnBingMapService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SimplyturnBingMapService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SimplyturnBingMapComponent {
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

class SimplyturnBingMapModule {
}
SimplyturnBingMapModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SimplyturnBingMapModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SimplyturnBingMapModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SimplyturnBingMapModule, declarations: [SimplyturnBingMapComponent], imports: [BrowserModule, FormsModule], exports: [SimplyturnBingMapComponent] });
SimplyturnBingMapModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SimplyturnBingMapModule, imports: [[BrowserModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SimplyturnBingMapModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SimplyturnBingMapComponent],
                    imports: [BrowserModule, FormsModule],
                    exports: [SimplyturnBingMapComponent],
                }]
        }] });

/*
 * Public API Surface of simplyturn-bing-map
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SimplyturnBingMapComponent, SimplyturnBingMapModule, SimplyturnBingMapService };
//# sourceMappingURL=simplyturn-bing-map.mjs.map
