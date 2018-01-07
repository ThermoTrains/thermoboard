import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityRecordComponent } from './entity-record.component';

describe('EntityRecordComponent', () => {
  let component: EntityRecordComponent;
  let fixture: ComponentFixture<EntityRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
