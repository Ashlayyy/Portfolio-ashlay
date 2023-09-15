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
        this.dividerElement = document.createElement('div');
        this.secondSection = document.createElement('section');
        
        this.avatar = new HumanAvatar(this.data, this);
        //this.skills = new SkillsBars(this.data, this);
        this.Experience = new Experience(this.data, this);
    }

    addClasses = () => {
        this.mainElement.classList = 'aboutMe';
        this.sideElement.classList = 'aboutMe_sideElement';
        this.secondSideElement.classList = 'aboutMe_secondSideElement';
        this.secondSection.classList = 'aboutMe_secondSection';
        this.dividerElement.classList = 'aboutMe_divider';
    }
    
    addSpecials = () => {
        this.mainElement.id = 'AboutMe';
    }

    render = () => {
        this.RenderEngine.render(this.mainElement, this.dividerElement);
        this.RenderEngine.render(this.dividerElement, this.sideElement);
        this.RenderEngine.render(this.dividerElement, this.secondSideElement);
        this.RenderEngine.render(this.mainElement, this.secondSection);
        this.RenderEngine.render(this.sideElement, this.avatar.containerElement);
        this.RenderEngine.render(this.secondSideElement, this.avatar.secondContainer);
        this.RenderEngine.render(this.secondSection, this.Experience.containerElement);
    }
}