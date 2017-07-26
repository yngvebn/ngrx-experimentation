import { MyBets } from './models/mybets.response';
import { Action } from '@ngrx/store';

export const DATES_FETCHED_SUCCESS = 'DATES_FETCHED_SUCCESS';
export const FETCH_DATES = 'DATES_FETCH';

export class DatesFetchedSuccess implements Action {
    readonly type = DATES_FETCHED_SUCCESS;
    constructor(public payload: MyBets) { }
}
export class FetchDates implements Action {
    readonly type = FETCH_DATES;

    constructor() { }
}




export type Actions = DatesFetchedSuccess | FetchDates;