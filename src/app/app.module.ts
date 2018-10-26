import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { StudyUnitsComponent } from './study-units/study-units.component';
import { StudyUnitComponent } from './study-units/study-unit/study-unit.component';
import { studyUnitsReducer } from './study-units/study-units.reducer';

@NgModule({
  declarations: [
    AppComponent,
    StudyUnitsComponent,
    StudyUnitComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      studyUnits: studyUnitsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
