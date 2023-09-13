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

class ProjectCard {
    id = undefined;
    name = undefined;

    constructor (id, name) {
        this.id = id;
        this.name = name;

        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.addEventListeners();
        this.render();
    }

    createElements = () => {
        this.cardMainElement = document.createElement('section');
        this.cardImage = document.createElement('img');
        this.cardNameText = document.createElement('p');
        this.cardText = document.createElement('p');
        this.cardGithHubButton = document.createElement('button');
        this.cardExploreButton = document.createElement('button');
    }

    addClasses = () => {
        this.cardMainElement.classList = 'ProjectCard';
    }
    
    addSpecials = () => {
        this.cardMainElement.id = this.id;
        this.cardNameText.innerText = this.name;
    }

    addEventListeners = () => {
        this.cardGithHubButton.addEventListener('click', () => {

        })

        this.cardExploreButton.addEventListener('click', () => {
            location.href = '/html/'
        })
    }

    render = () => {
        
    } 
}