import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceResultComponent } from './distance-result.component';

describe('DistanceResultComponent', () => {
  let component: DistanceResultComponent;
  let fixture: ComponentFixture<DistanceResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
