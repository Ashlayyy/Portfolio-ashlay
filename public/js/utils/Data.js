/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Data {
    constructor () {
        this.dataEnglish = undefined;
        this.dataDutch = undefined;
        this.setupData= undefined;
        this.api = new Api();
        return(this.awaitFunction());
    }

    getData = async () => {
        this.dataDutch = await this.api.getData('/json/Languages/dutch.json');
        this.dataEnglish = await this.api.getData('/json/Languages/english.json');
        this.setupData = await this.api.getData('/json/Setup/Setup.json');

        return {
            'DataDutch': this.dataDutch,
            'DataEnglish': this.dataEnglish,
            'DataSetup': this.setupData
        }
    }

    awaitFunction = async () => {
        return(await this.getData());
    }
}

