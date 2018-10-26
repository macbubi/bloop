import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyUnitComponent } from './study-unit.component';

describe('StudyUnitComponent', () => {
  let component: StudyUnitComponent;
  let fixture: ComponentFixture<StudyUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
