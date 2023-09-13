/* eslint-disable no-unused-vars */
class SkillsBars {
    data = undefined;
    aboutPage = undefined;
    containerElement = undefined;
    dataSkills = ['HTML', 'Javascript', 'SCSS', 'NodeJs'];
    dataPercent = ['95%', '80%', '70%', '65%'];

    constructor (data, aboutPage) {
        this.data = data;
        this.aboutPage = aboutPage;

        this.createElements();
        this.addClasses();
    }

    createElements = () => {
        this.containerElement = document.createElement('section');

        for (let i = 0; i < this.dataSkills.length; i++) {
            this.aboutPage.RenderEngine.render(this.containerElement, (new SkillBar(this.dataSkills[i], this.aboutPage, this.dataPercent[i]).containerElement));
        }
    }

    addClasses = () => {
        this.containerElement.classList = 'skillBars_container';
    }
}

class SkillBar {
    containerElement = undefined;
    barElement = undefined;
    id = undefined;
    aboutPage = undefined;
    percent = undefined;

    constructor (id, aboutPage, percent) {
        this.id = id;
        this.aboutPage = aboutPage
        this.percent = percent;

        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.render();
    }

    createElements = () => {
        this.containerElement = document.createElement('div');
        this.barElement = document.createElement('div');
        this.barTextElement = document.createElement('p');
        this.barPercentElement = document.createElement('p');
    }

    addClasses = () => {
        this.containerElement.classList = 'skillBar_container';
        this.barElement.classList = 'skillBar_bar';
        this.barTextElement.classList = 'skillBar_tekst';
        this.barPercentElement.classList = 'skillBar_percent';
    }
    
    addSpecials = () => {
        this.barElement.id = this.id;
        this.barTextElement.innerText = this.id;
        this.barPercentElement.innerText = this.percent;
    }

    render = () => {
        this.aboutPage.RenderEngine.render(this.containerElement, this.barElement);
        this.aboutPage.RenderEngine.render(this.barElement, this.barTextElement);
        this.aboutPage.RenderEngine.render(this.barElement, this.barPercentElement);
    }
}