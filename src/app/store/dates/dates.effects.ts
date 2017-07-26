import { MyBets } from './models/mybets.response';
import { DatesFetchedSuccess, FETCH_DATES } from './dates.actions';
import * as fromRoot from '../index';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs';

@Injectable()
export class DateEffects {
    @Effect()
    fetchDates$ = this.actions$
        .ofType(FETCH_DATES)
        .switchMap(() => Observable.of(new DatesFetchedSuccess(result)));


    constructor(public actions$: Actions, public store: Store<fromRoot.State>) {

    }
}

const result: any = {
    numberOfPages: 1,
    myBetsDate: [
        {
            date: '2016-05-09T00:00:00',



            myBetsRaceDays: [
                {
                    trackName: 'Leangen',



                    raceDayKey: 'LE_NR_2016-05-09',
                    bets: [
                        {
                            product: 'V5A',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 12300,
                            prize: 0,
                            refund: 11700,
                            firstRaceNumber: 4,
                            systemId: null,
                            ticketSerialNumber: '23a002d909050110',
                            raceDate: '2016-05-09T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V5A',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 12300,
                            prize: 0,
                            refund: 11700,
                            firstRaceNumber: 4,
                            systemId: null,
                            ticketSerialNumber: '23a002d909410110',
                            raceDate: '2016-05-09T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V5A',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 12300,
                            prize: 0,
                            refund: 11700,
                            firstRaceNumber: 4,
                            systemId: null,
                            ticketSerialNumber: '2720003125050110',
                            raceDate: '2016-05-09T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V5A',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 12300,
                            prize: 0,
                            refund: 11700,
                            firstRaceNumber: 4,
                            systemId: null,
                            ticketSerialNumber: '2720003125410110',
                            raceDate: '2016-05-09T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V5A',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 12300,
                            prize: 0,
                            refund: 11700,
                            firstRaceNumber: 4,
                            systemId: null,
                            ticketSerialNumber: '2d40009109050110',
                            raceDate: '2016-05-09T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V5A',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 12300,
                            prize: 0,
                            refund: 11700,
                            firstRaceNumber: 4,
                            systemId: null,
                            ticketSerialNumber: '2d40009109410110',
                            raceDate: '2016-05-09T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V5A',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 11300,
                            prize: 0,
                            refund: 1500,
                            firstRaceNumber: 4,
                            systemId: null,
                            ticketSerialNumber: '41c0465d83430110',
                            raceDate: '2016-05-09T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V5A',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 12300,
                            prize: 0,
                            refund: 11700,
                            firstRaceNumber: 4,
                            systemId: null,
                            ticketSerialNumber: '8960047925050110',
                            raceDate: '2016-05-09T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'DD',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Vanlig',
                            betCost: 4000,
                            prize: 2800,
                            refund: 0,
                            firstRaceNumber: 6,
                            systemId: null,
                            ticketSerialNumber: '8d80005125010110',
                            raceDate: '2016-05-09T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        }
                    ]
                }
            ]
        },
        {
            date: '2016-03-28T00:00:00',



            myBetsRaceDays: [
                {
                    trackName: 'Momarken',



                    raceDayKey: 'MO_NR_2016-03-28',
                    bets: [
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: null,
                            refund: null,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '41a28d4635040110',
                            raceDate: '2016-03-28T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        }
                    ]
                }
            ]
        },
        {
            date: '2016-02-02T00:00:00',



            myBetsRaceDays: [
                {
                    trackName: 'Forus',



                    raceDayKey: 'FO_NR_2016-02-02',
                    bets: [
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 400,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '2540241219950018',
                            raceDate: '2016-02-02T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 400,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '41628a3613910018',
                            raceDate: '2016-02-02T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 400,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '41628a9619950018',
                            raceDate: '2016-02-02T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 400,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '41644c5c35910018',
                            raceDate: '2016-02-02T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 400,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '8580881435910018',
                            raceDate: '2016-02-02T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 400,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '8580881813910018',
                            raceDate: '2016-02-02T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        }
                    ]
                }
            ]
        },
        {
            date: '2016-02-01T00:00:00',



            myBetsRaceDays: [
                {
                    trackName: 'Drammen',



                    raceDayKey: 'DR_NR_2016-02-01',
                    bets: [
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 1000,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '2720118113918010',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 600,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '29c215a913910810',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 600,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '29c215c335910810',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 1000,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '29c215c395138010',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 600,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '41a45d8d13938810',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 2000,
                            prize: 0,
                            refund: 200,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '4540112113130018',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V5A',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 10000,
                            prize: 4400,
                            refund: 3000,
                            firstRaceNumber: 4,
                            systemId: null,
                            ticketSerialNumber: '4540112113130810',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 600,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '45643b4b35158810',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 600,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '4740118135910810',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 5000,
                            prize: 0,
                            refund: 1000,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '4740118195138010',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        },
                        {
                            product: 'V5A',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 10000,
                            prize: 4400,
                            refund: 3000,
                            firstRaceNumber: 4,
                            systemId: null,
                            ticketSerialNumber: '816019a513130810',
                            raceDate: '2016-02-01T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        }
                    ]
                }
            ]
        },
        {
            date: '2016-01-21T00:00:00',



            myBetsRaceDays: [
                {
                    trackName: 'Bergen',



                    raceDayKey: 'BT_NR_2016-01-21',
                    bets: [
                        {
                            product: 'V65',
                            isFirstPrizeOnlyBet: false,
                            betMethod: 'Paalag',
                            betCost: 15000,
                            prize: 0,
                            refund: 15000,
                            firstRaceNumber: 1,
                            systemId: null,
                            ticketSerialNumber: '0b20951218150010',
                            raceDate: '2016-01-21T00:00:00',
                            isSystemBet: false,
                            systemNumber: 0
                        }
                    ]
                }
            ]
        }
    ]
}
