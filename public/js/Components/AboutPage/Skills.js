/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class SkillsBars {
    data = undefined;
    aboutPage = undefined;
    containerElement = undefined;

    constructor (data, aboutPage) {
        this.data = data;
        this.aboutPage = aboutPage;

        this.createElements();
        this.addClasses();
    }

    createElements = () => {
        this.containerElement = document.createElement('section');

        for (let i = 0; i < this.data.Experience.Languages.length; i++) {
            this.aboutPage.RenderEngine.render(this.containerElement, (new SkillBar(this.aboutPage, this.data.Experience.Languages[i]).containerElement));
        }
    }

    addClasses = () => {
        this.containerElement.classList = 'skillBars_container';
    }
}

class SkillBar {
    containerElement = undefined;
    barElement = undefined;
    aboutPage = undefined;
    data = undefined;

    constructor (aboutPage, data) {
        this.aboutPage = aboutPage
        this.data = data;

        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.render();
    }

    createElements = () => {
        this.containerElement = document.createElement('div');
        this.textElement = document.createElement('p');
        this.barElement = document.createElement('div');
        this.barTextElement = document.createElement('p');
    }

    addClasses = () => {
        this.containerElement.classList = 'skillBar_container';
        this.textElement.classList = 'skillBar_language';
        this.barElement.classList = 'skillBar_bar';
        this.barTextElement.classList = 'skillBar_tekst';
    }
    
    addSpecials = () => {
        this.barTextElement.innerText = new DataCalc(this.data.dateBegon, new Date()).result;
    }

    render = () => {
        this.aboutPage.RenderEngine.render(this.containerElement, this.textElement);
        this.aboutPage.RenderEngine.render(this.containerElement, this.barElement);
        this.aboutPage.RenderEngine.render(this.barElement, this.barTextElement);
    }
}