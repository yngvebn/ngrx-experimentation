import { createSelector } from '@ngrx/store';
import * as fromDates from './dates';

export interface State {
    dates: fromDates.State
}

export const reducers = {
    dates: fromDates.reducer
}

export const getDatesState = (state: State) => state.dates;

export const getCountForDates = createSelector(getDatesState, fromDates.getCountForDates);
export const getRaceDays = createSelector(getDatesState, fromDates.getRaceDays);
export const getDates = createSelector(getDatesState, fromDates.getDates);