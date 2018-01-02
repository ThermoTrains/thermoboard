import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueImageComponent } from './value-image.component';

describe('ValueImageComponent', () => {
  let component: ValueImageComponent;
  let fixture: ComponentFixture<ValueImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
