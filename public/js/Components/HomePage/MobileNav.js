/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class MobileNavigation {
    mobileNavigation = undefined;
    navigationListElement = undefined;
    listItemLiElement = undefined;
    listItemAElement = undefined;
    settings = undefined;
    names = [
        'Home', 'Over Mij', 'Projecten', 'Contact'
    ];
    classNames = [
        'Home', 'AboutMe', 'Projects', 'Contact'
    ]
    fontAwsome = [
        '<i class="fa-solid fa-house fontAwsome"></i>', '<i class="fa-solid fa-address-card fontAwsome"></i>', '<i class="fa-solid fa-bars-progress fontAwsome"></i>', '<i class="fa-solid fa-comment fontAwsome"></i>'
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
            this.navigationDivider.classList = 'mobileNavigation__divider'

            this.tempElement = document.createElement('a');
            this.tempElement.classList = 'mobileNavigation__anchor';

            if(this.names[i] == 'Over Mij') {
                this.listItemAElement.href = `#AboutMe`;
                this.tempElement.href = `#AboutMe`;
                this.listItemTextElement.innerText = `Over Mij`
            } else {
                this.listItemAElement.href = `#${this.classNames[i]}`;
                this.tempElement.href = `#${this.classNames[i]}`;
                this.listItemTextElement.innerText = `${this.names[i]}`
            }
            this.homePage.RenderEngine.render(this.listItemAElement, this.listItemLiElement);
            this.homePage.RenderEngine.render(this.navigationDivider, this.listItemAElement);
            this.homePage.RenderEngine.render(this.tempElement, this.listItemTextElement);
            this.homePage.RenderEngine.render(this.navigationDivider, this.tempElement);
            this.homePage.RenderEngine.render(this.navigationListElement, this.navigationDivider);
        }
        console.log(this.navigationListElement)
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