import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyturnBingMapComponent } from './simplyturn-bing-map.component';

describe('SimplyturnBingMapComponent', () => {
  let component: SimplyturnBingMapComponent;
  let fixture: ComponentFixture<SimplyturnBingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplyturnBingMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplyturnBingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
