/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Experience {
    data = undefined;
    aboutPage = undefined;

    constructor (data, aboutPage) {
        this.data = data;
        this.aboutPage = aboutPage;

        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.render();
    }

    createElements = () => {
        this.containerElement = document.createElement('section');

        for(let i = 0; i < this.data.Experience.CodingLanguages.length; i++) {
            this.aboutPage.RenderEngine.render(this.containerElement, new ExperienceCard(this.data.Experience.CodingLanguages[i], this.aboutPage).containerElement);
        }
    }

    addClasses = () => {
        this.containerElement.classList = 'Experience_container';
    }

    addSpecials = () => {

    }

    render = () => {

    }
}

class ExperienceCard {
    data = undefined;
    AboutPage = undefined;

    constructor (data, AboutPage) {
        this.data = data;
        this.AboutPage = AboutPage;

        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.render();
    }

    createElements = () => {
        this.containerElement = document.createElement('div');
        this.iconWrapper = document.createElement('figure');
        this.iconElement = document.createElement('img');
        this.barElement = document.createElement('div');
        this.textElement = document.createElement('p');
    }

    addClasses = () => {
        this.containerElement.classList = 'experienceCard_container';
        this.iconWrapper.classList = 'experienceCard_wrapper';
        this.iconElement.classList = 'experienceCard_icon';
        this.barElement.classList = 'experienceCard_bar';
        this.textElement.classList = 'experienceCard_text';
    }

    addSpecials = () => {
        this.iconElement.src = this.data.iconUrl;
        this.textElement.innerText = new DataCalc(this.data.dateBegon, new Date()).result;
    }

    render = () => {
        this.AboutPage.RenderEngine.render(this.containerElement, this.iconWrapper);
        this.AboutPage.RenderEngine.render(this.iconWrapper, this.iconElement);
        this.AboutPage.RenderEngine.render(this.containerElement, this.barElement);
        this.AboutPage.RenderEngine.render(this.barElement, this.textElement);
    }
}