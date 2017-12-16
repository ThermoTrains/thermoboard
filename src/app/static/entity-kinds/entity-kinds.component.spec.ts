import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityKindsComponent } from './entity-kinds.component';

describe('EntityKindsComponent', () => {
  let component: EntityKindsComponent;
  let fixture: ComponentFixture<EntityKindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntityKindsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityKindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
