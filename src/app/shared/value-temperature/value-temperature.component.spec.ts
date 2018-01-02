import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueTemperatureComponent } from './value-temperature.component';

describe('ValueTemperatureComponent', () => {
  let component: ValueTemperatureComponent;
  let fixture: ComponentFixture<ValueTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
