import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../app.state';
import { StudyUnit } from './study-unit/study-unit.model';

@Component({
  selector: 'app-study-units',
  templateUrl: './study-units.component.html',
  styleUrls: ['./study-units.component.css']
})
export class StudyUnitsComponent implements OnInit {
  studyUnits: Observable<StudyUnit[]>;
  constructor(private store: Store<AppState>) {
    this.studyUnits = store.select('studyUnits');
  }

  ngOnInit() {
  }

}
