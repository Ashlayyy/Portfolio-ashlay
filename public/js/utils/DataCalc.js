/* eslint-disable no-unused-vars */
class DataCalc {
    result = undefined;
    years = 0;
    months = 0;

    constructor (dateBegon, dateNow) {
        dateBegon = new Date(dateBegon);
        const monthDiff = dateNow.getMonth() - dateBegon.getMonth();
        const yearDiff = dateNow.getYear() - dateBegon.getYear();
        this.months = monthDiff + yearDiff * 12;

        while(this.months >= 12) {
            this.years = this.years + 1;
            this.months = this.months - 12;
        }

        if (this.years > 0) {
            this.result = `${this.years} years`;
        } else this.result = `${this.months} months`;
        return this.result;
    }
}