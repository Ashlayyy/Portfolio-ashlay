/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Navigation {
    navigationElement = undefined;
    figureElement = undefined;
    navigationListElement = undefined;
    listItemLiElement = undefined;
    listItemAElement = undefined;
    buttonElement = undefined;
    settings = undefined;
    names = [
        'Home', 'About Me', 'Projects', 'Contact'
    ];
    data = undefined;
    homePage = undefined;

    constructor(data, homePage) {
        this.data = data;
        this.homePage = homePage;

        this.createElements();
        this.generateListItems();
        this.addClasses();
        this.addSpecials();
        this.render();
    }

    createElements = () => {
        this.navigationElement = document.createElement('nav');
        this.figureElement = document.createElement('figure');
        this.navigationListElement = document.createElement('ul');
        this.buttonElement = document.createElement('button');
        this.settings = new Settings(this.homePage).settingsElement;
    }

    generateListItems = () => {
        for (let i = 0; i < this.names.length; i++) {
            this.listItemLiElement = document.createElement('li');
            this.listItemLiElement.classList = 'navigation__item';

            this.listItemAElement = document.createElement('a');
            this.listItemAElement.classList = 'navigation__link';
            if(this.names[i] == 'About Me') {
                this.listItemAElement.href = `#AboutMe`;
            } else {
                this.listItemAElement.href = `#${this.names[i]}`;
            }

            if (i < 3) {
                this.listItemAElement.innerText = this.names[i];
            } else {
                this.buttonElement.innerText = this.names[i];
                this.homePage.RenderEngine.render(this.listItemAElement, this.buttonElement);
            }
            this.homePage.RenderEngine.render(this.listItemLiElement, this.listItemAElement);
            this.homePage.RenderEngine.render(this.navigationListElement, this.listItemLiElement);
        }
    }

    addClasses = () => {
        this.navigationElement.classList = 'navigation';
        this.figureElement.classList = 'navigation__logo';
        this.navigationListElement.classList = 'navigation__links';
        this.buttonElement.classList = 'navigation__contact';
    }

    addSpecials = () => {
        this.navigationElement.id = 'navigation'
        this.buttonElement.id = 'navigation__contact';
    }

    render = () => {
        this.homePage.RenderEngine.render(this.navigationElement, this.figureElement);
        this.homePage.RenderEngine.render(this.navigationElement, this.navigationListElement);
        this.homePage.RenderEngine.render(this.navigationElement, this.settings);
    }
}