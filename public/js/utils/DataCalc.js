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
        if (this.years === 1) {
            this.result = `${this.years} jaar`;
        } else if (this.years > 1) {
            this.result = `${this.years} jaar`;
        } else if (this.months === 1) {
            this.result = `${this.months} maand`;
        } else this.result = `${this.months} maanden`;
        return this.result;
    }
}