import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyUnitsComponent } from './study-units.component';

describe('StudyUnitsComponent', () => {
  let component: StudyUnitsComponent;
  let fixture: ComponentFixture<StudyUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
