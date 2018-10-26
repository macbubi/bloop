import { Action } from '@ngrx/store';

export const CHANGE_DEGREE      = "[Search] Change Degree Field";
export const CHANGE_UNIVERSITY  = "[Search] Change University Field";
export const CHANGE_COURSE      = "[Search] Change Course Field";
export const CHANGE_SEARCH_TERM = "[Search] Change Search Field";
export const CHANGE_FILTER_TYPE = "[Search] Change Filter Type";
export const CHANGE_SORT_BY     = "[Search] Change Sort By";
export const CHANGE_SORT_ORDER  = "[Search] Change Sort Order";
// TODO: implement next actions
export const ADD_STUDY_UNITS    = "[Study Units] Add Units";
export const REMOVE_STUDY_UNITS = "[Study Units] Remove Units";

export class ChangeDegree implements Action {
    readonly type = CHANGE_DEGREE;
    constructor(public payload: string) {};
}

export class ChangeUniversity implements Action {
    readonly type = CHANGE_UNIVERSITY;
    constructor(public payload: string) {};
}

export class ChangeCourse implements Action {
    readonly type = CHANGE_COURSE;
    constructor(public payload: string) {};
}

export class ChangeSearchTerm implements Action {
    readonly type = CHANGE_SEARCH_TERM;
    constructor(public payload: string) {};
}

export class ChangeFilterType implements Action {
    readonly type = CHANGE_FILTER_TYPE;
    constructor(public payload: string) {};
}

export class ChangeSortBy implements Action {
    readonly type = CHANGE_SORT_BY;
    constructor(public payload: string) {};
}

export class ChangeSortOrder implements Action {
    readonly type = CHANGE_SORT_ORDER;
    constructor(public payload: string) {};
}

export type StudyUnitsActions = ChangeDegree |
                              ChangeUniversity |
                              ChangeCourse |
                              ChangeSearchTerm |
                              ChangeFilterType |
                              ChangeSortBy |
                              ChangeSortOrder;
