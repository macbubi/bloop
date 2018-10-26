import { StudyUnit } from './study-unit/study-unit.model';

export interface StudyUnits {
  studyUnits: StudyUnit[];
  search: {
    degree: string,
    university: string,
    course: string,
    searchTerm: string,
    filter: {
      type: string | string[]
    },
    sort: {
      sortBy: string,
      sortOrder: string
    }
  }
}
