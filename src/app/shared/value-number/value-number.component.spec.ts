import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueNumberComponent } from './value-number.component';

describe('ValueNumberComponent', () => {
  let component: ValueNumberComponent;
  let fixture: ComponentFixture<ValueNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
