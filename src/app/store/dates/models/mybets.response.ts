export interface Bet {
    product: string;
    betCost: number;
}

export interface MyBetsRaceDay {
    trackName: string;
    raceDayKey: string;
    bets: Bet[] | any[];
}

export interface MyBetsDate {
    date: string;
    myBetsRaceDays: MyBetsRaceDay[] | any[];
}

export interface MyBets {
    numberOfPages: number;
    myBetsDate: MyBetsDate[];
}