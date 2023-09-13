/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class AboutMePage {
    RenderEngine = undefined;
    data = undefined;
    mainElement = undefined;
    
    constructor (data, RenderEngine) {
        this.data = data;
        this.RenderEngine = RenderEngine;

        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.render();
    }

    createElements = () => {
        this.mainElement = document.createElement('section');
        this.sideElement = document.createElement('section');
        this.secondSideElement = document.createElement('section');
        this.avatar = new HumanAvatar(this.data, this);
        this.skills = new SkillsBars(this.data, this);
    }

    addClasses = () => {
        this.mainElement.classList = 'aboutMe';
        this.sideElement.classList = 'aboutMe_sideElement';
        this.secondSideElement.classList = 'aboutMe_secondSideElement';
    }
    
    addSpecials = () => {
        this.mainElement.id = 'AboutMe';
    }

    render = () => {
        this.RenderEngine.render(this.mainElement, this.sideElement);
        this.RenderEngine.render(this.mainElement, this.secondSideElement);
        this.RenderEngine.render(this.sideElement, this.avatar.containerElement);
        this.RenderEngine.render(this.secondSideElement, this.skills.containerElement);
    }
}