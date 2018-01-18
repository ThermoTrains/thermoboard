import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRecordHistogramComponent } from './chart-record-histogram.component';

describe('ChartRecordHistogramComponent', () => {
  let component: ChartRecordHistogramComponent;
  let fixture: ComponentFixture<ChartRecordHistogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartRecordHistogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRecordHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
