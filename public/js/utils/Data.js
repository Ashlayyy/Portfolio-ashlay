/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Data {
    dataEnglish = undefined;
    dataDutch = undefined;
    ClassesData = undefined;
    DataJson = undefined;
    api = undefined;

    constructor () {
        this.api = new Api();
        this.data();
    }

    async data () {
        this.dataDutch = await this.api.getData('/json/Languages/dutch.json');
        this.dataEnglish = await this.api.getData('/json/Languages/english.json');
        this.ClassesData = await this.api.getData('/json/Settings/Classes.json');
        this.DataJson = await this.api.getData('/json/Settings/Data.json');
    }
}

