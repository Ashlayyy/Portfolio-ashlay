/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class MobileNavigation {
    mobileNavigation = undefined;
    navigationListElement = undefined;
    listItemLiElement = undefined;
    listItemAElement = undefined;
    settings = undefined;
    names = [
        'Home', 'About Me', 'Projects', 'Contact'
    ];
    fontAwsome = [
        '<i class="fa-solid fa-house fa-2x fontAwsome"></i>', '<i class="fa-solid fa-address-card fa-2x fontAwsome"></i>', '<i class="fa-solid fa-bars-progress fa-2x fontAwsome"></i>', '<i class="fa-solid fa-comment fa-2x fontAwsome"></i>'
    ]
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
        this.mobileNavigation = document.createElement('nav');
        this.navigationListElement = document.createElement('ul');
        this.settings = new Settings(this.homePage).settingsElement;
    }

    generateListItems = () => {
        for (let i = 0; i < this.names.length; i++) {
            this.listItemLiElement = document.createElement('li');
            this.listItemLiElement.classList = 'mobileNavigation__item';
            this.listItemLiElement.innerHTML = this.fontAwsome[i];

            this.listItemAElement = document.createElement('a');
            this.listItemAElement.classList = 'mobileNavigation__link';

            this.listItemTextElement = document.createElement('p');
            this.listItemTextElement.classList = 'mobileNavigation__text';

            this.navigationDivider = document.createElement('div');
            this.navigationDivider.className = 'mobileNavigation__divider'

            this.listItemTextElement.innerText = `${this.names[i]}`

            if(this.names[i] == 'About Me') {
                this.listItemAElement.href = `#AboutMe`;
            } else {
                this.listItemAElement.href = `#${this.names[i]}`;
            }

            this.homePage.RenderEngine.render(this.listItemAElement, this.listItemLiElement);
            this.homePage.RenderEngine.render(this.navigationDivider, this.listItemAElement);
            this.homePage.RenderEngine.render(this.navigationDivider, this.listItemTextElement);
            this.homePage.RenderEngine.render(this.navigationListElement, this.navigationDivider);
        }
    }

    addClasses = () => {
        this.mobileNavigation.classList = 'mobileNavigation';
        this.navigationListElement.classList = 'mobileNavigation__links';
    }

    addSpecials = () => {
        this.mobileNavigation.id = 'mobileNavigation';
    }

    render = () => {
        this.homePage.RenderEngine.render(this.mobileNavigation, this.navigationListElement);
        //this.homePage.RenderEngine.render(this.mobileNavigation, this.settings);
    }
}