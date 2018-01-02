import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueImageDialogComponent } from './value-image-dialog.component';

describe('ValueImageDialogComponent', () => {
  let component: ValueImageDialogComponent;
  let fixture: ComponentFixture<ValueImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueImageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
