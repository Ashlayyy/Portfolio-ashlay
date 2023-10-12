/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class HomePage {
    navigation = undefined;
    mainElement = undefined;
    introductionElement = undefined;
    hintButtonWrapElement = undefined;
    hintButtonElement = undefined;
    hintIconElement = undefined;
    data = undefined;
    RenderEngine = undefined;

    constructor (data, RenderEngine) {
        this.data = data; 
        this.RenderEngine = RenderEngine;

        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.addClickListeners();
        this.render();
    }

    createElements = () => {
        this.mainElement = document.createElement('section');
        this.navigation = new Navigation(this.data, this).navigationElement;
        this.mobileNavigation = new MobileNavigation(this.data, this).mobileNavigation;
        this.introductionElement = new Introduction(this.data, this).introductionElement;
        this.hintButtonWrapElement = document.createElement('article');
        this.hintButtonElement = document.createElement('button');
        this.hintIconElement = document.createElement('i');
    }

    addClasses = () => {
        this.mainElement.classList = 'home';
        this.hintButtonWrapElement.classList = 'home__buttonWrapper';
        this.hintButtonElement.classList = 'home__hintButton';
        this.hintIconElement.classList = 'fa-solid fa-angle-down fa-4x';
    }
    
    addSpecials = () => {
        this.mainElement.id = 'Home';
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
        //this.RenderEngine.render(this.mainElement, this.navigation);
        this.RenderEngine.render(this.mainElement, this.introductionElement);
        this.RenderEngine.render(this.mainElement, this.hintButtonWrapElement);
        this.RenderEngine.render(this.hintButtonWrapElement, this.hintButtonElement);
        this.RenderEngine.render(this.hintButtonElement, this.hintIconElement);
    }
}