/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class ProjectsPage {
    RenderEngine = undefined;
    data = undefined;
    mainElement = undefined;
    amountOfCards = 6;
    
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
        this.titleElement = document.createElement('h2');
        this.divider = document.createElement('div');
    }

    addClasses = () => {
        this.mainElement.classList = 'projects';
        this.titleElement.classList = 'projects_title';
        this.divider.classList = 'projects_divider';
    }
    
    addSpecials = () => {
        this.mainElement.id = 'Projects';
        this.titleElement.innerText = this.data.Translating.Dutch.ProjectTitle;
    }

    render = () => {
        this.RenderEngine.render(this.mainElement, this.titleElement);
        this.RenderEngine.render(this.mainElement, this.divider);

        for(let i = 0; i < this.data.Projects.length; i++) {
            this.RenderEngine.render(this.divider, new ProjectCard(this.data.Projects[i], this.data.Projects, this).cardMainElement);
        }
    }
}