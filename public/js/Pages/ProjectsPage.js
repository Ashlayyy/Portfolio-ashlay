/* eslint-disable no-unused-vars */
class ProjectsPage {
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
    }

    addClasses = () => {
        this.mainElement.classList = 'projects';
    }
    
    addSpecials = () => {
        this.mainElement.id = 'Projects';
    }

    render = () => {
        
    }
}