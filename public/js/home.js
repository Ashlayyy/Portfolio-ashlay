class Home {
    navigation = undefined;
    mainElement = undefined;
    introductionElement = undefined;
    hintButtonWrapElement = undefined;
    hintButtonElement = undefined;
    hintIconElement = undefined;

    constructor () {
        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.addClickListeners();
        this.render();
    }

    createElements = () => {
        this.mainElement = document.createElement('main');
        this.navigation = new Navigation().navigationElement;
        this.introductionElement = new Introduction().introductionElement;
        this.hintButtonWrapElement = document.createElement('article');
        this.hintButtonElement = document.createElement('button');
        this.hintIconElement = document.createElement('i');
    }

    addClasses = () => {
        this.mainElement.classList = 'home';
        this.hintButtonWrapElement.classList = 'home__buttonWrapper';
        this.hintButtonElement.classList = 'home__hintButton';
        this.hintIconElement.classList = 'fa-regular fa-angles-down fa-4x';
    }
    
    addSpecials = () => {
        this.mainElement.id = 'home';
    }

    addClickListeners = () => {
        this.hintButtonElement.addEventListener('click', () => {
            window.scroll({
                top: 700,
                behavior: "smooth"
            })
        })
    }

    render = () => {
        this.mainElement.appendChild(this.navigation);
        this.mainElement.appendChild(this.introductionElement);
        this.mainElement.appendChild(this.hintButtonWrapElement);
        this.hintButtonWrapElement.appendChild(this.hintButtonElement);
        this.hintButtonElement.appendChild(this.hintIconElement);
    }
}

class Introduction {
    introductionElement = undefined;
    h2Element = undefined;
    textElement = undefined;
    buttonWrapperElement = undefined;
    buttonElement = undefined;

    constructor () {
        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.addClickListeners();
        this.render();
    }

    createElements = () => {
        this.introductionElement = document.createElement('section');
        this.h2Element = document.createElement('h2');
        this.textElement = document.createElement('p');
        this.buttonWrapperElement = document.createElement('div');
        this.buttonElement = document.createElement('button');
    }

    addClasses = () => {
        this.introductionElement.classList = 'introduction';
        this.h2Element.classList = 'introduction__name';
        this.textElement.classList = 'introduction__text';
        this.buttonWrapperElement.classList = 'introduction__buttonWrapper';
        this.buttonElement.classList = 'introduction__button';
    }
    
    addSpecials = () => {
        this.h2Element.innerText = 'Ashlay';
        this.textElement.innerText = 'Hello! This is my portfolio as a software developer. Look through all you want!';
        this.buttonElement.id = 'introduction__button';
        this.buttonElement.innerText = 'My projects';
    }

    addClickListeners = () => {
        this.buttonElement.addEventListener('click', () => {
            const element = document.getElementById('projects');
            if(element == null || element == undefined || element == '') {
                return
            } else element.scrollIntoView({behavior: 'smooth'}, false);;
        })
    }

    render = () => {
        this.introductionElement.appendChild(this.h2Element);
        this.introductionElement.appendChild(this.textElement);
        this.introductionElement.appendChild(this.buttonWrapperElement);
        this.buttonWrapperElement.appendChild(this.buttonElement);
    }
}