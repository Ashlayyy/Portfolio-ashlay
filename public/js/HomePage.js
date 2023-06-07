/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Home {
    navigation = undefined;
    mainElement = undefined;
    introductionElement = undefined;
    hintButtonWrapElement = undefined;
    hintButtonElement = undefined;
    hintIconElement = undefined;
    data = undefined;

    constructor (data) {
        this.data = data; 

        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.addClickListeners();
        this.render();
    }

    createElements = () => {
        this.mainElement = document.createElement('main');
        this.navigation = new Navigation(this.data).navigationElement;
        this.introductionElement = new Introduction(this.data).introductionElement;
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