import { Component, OnInit, Input } from '@angular/core';

import { StudyUnit } from './study-unit.model';

@Component({
  selector: 'app-study-unit',
  templateUrl: './study-unit.component.html',
  styleUrls: ['./study-unit.component.css']
})
export class StudyUnitComponent implements OnInit {
  @Input() studyUnit: StudyUnit;
  constructor() { }

  ngOnInit() {
  }

}
