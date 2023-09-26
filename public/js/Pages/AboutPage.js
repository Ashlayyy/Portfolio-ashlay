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
        this.aboutMeTitle = document.createElement('h2');
        this.skillsTitle = document.createElement('h2');
        
        this.avatar = new HumanAvatar(this.data, this);
        this.Experience = new Experience(this.data, this);
    }

    addClasses = () => {
        this.mainElement.classList = 'aboutMe';
        this.sideElement.classList = 'aboutMe_sideElement';
        this.secondSideElement.classList = 'aboutMe_secondSideElement';
        this.secondSection.classList = 'aboutMe_secondSection';
        this.skillsTitle.classList = 'aboutMe_skillsTitle';
        this.dividerElement.classList = 'aboutMe_divider';
        this.aboutMeTitle.classList = 'aboutMe_title';
    }
    
    addSpecials = () => {
        this.mainElement.id = 'AboutMe';
        this.aboutMeTitle.innerText = 'About Me';
        this.skillsTitle.innerText = 'Skills';
    }

    render = () => {
        this.RenderEngine.render(this.mainElement, this.dividerElement);
        this.RenderEngine.render(this.dividerElement, this.aboutMeTitle);
        this.RenderEngine.render(this.dividerElement, this.sideElement);
        this.RenderEngine.render(this.dividerElement, this.secondSideElement);
        this.RenderEngine.render(this.mainElement, this.skillsTitle);
        this.RenderEngine.render(this.mainElement, this.secondSection);
        this.RenderEngine.render(this.sideElement, this.avatar.containerElement);
        this.RenderEngine.render(this.secondSideElement, this.avatar.secondContainer);
        this.RenderEngine.render(this.secondSection, this.Experience.containerElement);
    }
}