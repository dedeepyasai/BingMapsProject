import { AfterViewInit, OnChanges } from '@angular/core';
import 'bingmaps';
import * as i0 from "@angular/core";
export declare class SimplyturnBingMapComponent implements OnChanges, AfterViewInit {
    API_KEY: any;
    randomNumber: any;
    constructor();
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    addPinToNewMap(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimplyturnBingMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SimplyturnBingMapComponent, "lib-simplyturn-bing-map", never, { "API_KEY": "API_KEY"; "randomNumber": "randomNumber"; }, {}, never, never>;
}
