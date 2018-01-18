import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEntityKindComponent } from './chart-entity-kind.component';

describe('ChartEntityKindComponent', () => {
  let component: ChartEntityKindComponent;
  let fixture: ComponentFixture<ChartEntityKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartEntityKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartEntityKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
