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

        for(let i = 0; i <= this.amountOfCards; i++) {
            this.RenderEngine.render(this.mainElement, new ProjectCard(this.data[i].id, this.data[i].name, this.data[i]));
        }
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
    data = undefined;

    constructor (id, name, data) {
        this.id = id;
        this.name = name;
        this.data = data;

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
        this.cardImage.classList = 'ProjectCard_img';
        this.cardNameText.classList = 'ProjectCard_name';
        this.cardText.classList = 'ProjectCard_text';
        this.cardGithHubButton.classList = 'ProjectCard_github';
        this.cardExploreButton.classList = 'ProjectCard_explore';
    }
    
    addSpecials = () => {
        this.cardMainElement.id = this.id;
        this.cardNameText.innerText = this.name;
        this.cardImage.src = this.data.imgUrl;
        this.cardText.innerText = this.data.shortProjectText;
    }

    addEventListeners = () => {
        this.cardGithHubButton.addEventListener('click', () => {
            for(let i = 0; i < this.data.length; i++) {
                if (this.data[i].id == this.id) location.href = this.data[i].liveUrl;
            }
        })

        this.cardExploreButton.addEventListener('click', () => {
            window.localStorage.setItem('projectID', this.id)
            location.href = '/project';
        })
    }

    render = () => {
        
    } 
}