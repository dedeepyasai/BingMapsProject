import { TestBed } from '@angular/core/testing';

import { SimplyturnBingMapService } from './simplyturn-bing-map.service';

describe('SimplyturnBingMapService', () => {
  let service: SimplyturnBingMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplyturnBingMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
