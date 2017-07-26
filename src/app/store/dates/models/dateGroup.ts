export class DateGroup {
    date: string;
    expanded: boolean;
    get actualDate() {
        return new Date(this.date);
    }
}