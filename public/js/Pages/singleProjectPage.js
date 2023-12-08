/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class SingleProjectPage {
    RenderEngine = undefined;
    data = undefined;
    mainElement = undefined;
    images = [];
    
    constructor (data, RenderEngine) {
        this.data = data;
        this.RenderEngine = RenderEngine;

        this.localItems();
        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.render();
    }

    localItems = () => {
        const id = localStorage.getItem('projectID');
        for (let i = 0; i < this.data.Projects.length; i++) {
            if(this.data.Projects[i].id == id) console.log(this.data.Projects[i])
        }
    }

    createElements = () => {
        this.mainElement = document.createElement('main');
        this.projectText = document.createElement('section');
        this.mainTitle = document.createElement('h1');
        this.mainText = document.createElement('p');
        this.subHeader = document.createElement('h3');
        this.subText = document.createElement('p');
        this.techSection = document.createElement('section');
        this.techTitle = document.createElement('h3');
        this.techStack = document.createElement('p');
        this.techServerTitle = document.createElement('h3');
        this.techStackServer = document.createElement('p');
        this.imgSection = document.createElement('section');
    }

    addClasses = () => {
        this.mainElement.classList = '';
        this.projectText.classList = '';
        this.mainTitle.classList = '';
        this.mainText.classList = '';
        this.subHeader.classList = '';
        this.subText.classList = '';
        this.techSection.classList = '';
        this.techTitle.classList = '';
        this.techStack.classList = '';
        this.techServerTitle.classList = '';
        this.techStackServer.classList = '';
        this.imgSection.classList = '';
    }
    
    addSpecials = () => {
        for(let i = 0; i < this.images.length; i++) {
            this.imgElement = document.createElement('img');
            this.RenderEngine.render(this.imgSection, this.imgElement)
        }
    }

    render = () => {

    }
}