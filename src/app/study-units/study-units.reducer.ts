import { Store } from '@ngrx/store';
import * as StudyUnitsActions from './study-units.actions';
import { AppState } from '../app.state';
import { StudyUnits } from './study-units.model';
import { initialState } from './study-units.db'; // TODO: replace with a real DB


export function studyUnitsReducer(state: StudyUnits = initialState, action: StudyUnitsActions.StudyUnitsActions) {
  switch(action.type) {
    case StudyUnitsActions.CHANGE_DEGREE:
      state.search.degree = action.payload;
      return state;
    case StudyUnitsActions.CHANGE_UNIVERSITY:
      return state;
    case StudyUnitsActions.CHANGE_COURSE:
      return state;
    case StudyUnitsActions.CHANGE_SEARCH_TERM:
      return state;
    case StudyUnitsActions.CHANGE_FILTER_TYPE:
      return state;
    case StudyUnitsActions.CHANGE_SORT_BY:
      return state;
    case StudyUnitsActions.CHANGE_SORT_ORDER:
      return state;
    default:
      return state;
  }
}
