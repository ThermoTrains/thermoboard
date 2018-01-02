import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueStringComponent } from './value-string.component';

describe('ValueStringComponent', () => {
  let component: ValueStringComponent;
  let fixture: ComponentFixture<ValueStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
