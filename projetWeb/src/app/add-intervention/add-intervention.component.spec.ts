import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInterventionComponent } from './add-intervention.component';

describe('AddInterventionComponent', () => {
  let component: AddInterventionComponent;
  let fixture: ComponentFixture<AddInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
