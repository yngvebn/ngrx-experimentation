import { DateGroup } from './models/dateGroup';
import { RaceDay } from './models/raceDay';
import { Action, createSelector } from '@ngrx/store';
import * as dates from './dates.actions';

export interface State {
    dates: DateGroup[];
    countPerDate: { [key: string]: number };
    raceDays: { [key: string]: RaceDay[] };
    expandedDates: string[];
}

const initialState: State = {
    dates: [],
    countPerDate: {},
    raceDays: {},
    expandedDates: []
};

export function reducer(state: State = initialState, action: dates.Actions): State {
    switch (action.type) {
        case dates.DATES_FETCHED_SUCCESS: {
            let existingDates = state.dates.map(d => d.date);
            let newDates = action.payload.myBetsDate
                                .map(bets => bets.date)
                                .filter(date => existingDates.indexOf(date) === -1);
            let oldExistingDates = existingDates
                                        .filter(d => newDates.indexOf(d) > -1);
            let allNewDates =  [...newDates, ...oldExistingDates]
                                    .map()
            console.log(action);
            return state;
        }
        default:
            return state;
    }
}


export const getRaceDayEntities = (state: State) => state.raceDays;
export const getDateGroups = (state: State) => state.dates;

export const getDates = createSelector(getDateGroups, (dates) => dates.map(date => date.date));
export const getRaceDays = createSelector(getDates, getRaceDayEntities, (dates, raceDays) => {
    return dates.map(date => raceDays[date]);
});
export const getCountForDates = createSelector(getDates, getRaceDayEntities, (dates, raceDays) => {
    return dates.reduce((counts: { [id: string]: number}, date) => {
        return Object.assign({}, {
            [date]: raceDays[date].length
        });
    }, {});
});

