/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Data {
    dataEnglish = undefined;
    dataDutch = undefined;
    api = undefined;

    constructor () {
        this.api = new Api();
        this.dataDutch = this.api.getData('../../json/Languages/dutch.json');
        this.dataEnglish = this.api.getData('../../json/Languages/english.json');
    }
}

