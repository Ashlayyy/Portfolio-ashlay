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

    constructor() {
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
        this.settings = new Settings().settingsElement;
    }

    generateListItems = () => {
        for (let i = 0; i < this.names.length; i++) {
            this.listItemLiElement = document.createElement('li');
            this.listItemLiElement.classList = 'navigation__item';

            this.listItemAElement = document.createElement('a');
            this.listItemAElement.classList = 'navigation__link';
            this.listItemAElement.href = `#${this.names[i]}`;

            if (i < 3) {
                this.listItemAElement.innerText = this.names[i];
            } else {
                this.buttonElement.innerText = this.names[i];
                this.listItemAElement.appendChild(this.buttonElement);
            }

            this.listItemLiElement.appendChild(this.listItemAElement);
            this.navigationListElement.appendChild(this.listItemLiElement);
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
        this.navigationElement.appendChild(this.figureElement);
        this.navigationElement.appendChild(this.navigationListElement);
        this.navigationElement.appendChild(this.settings);
    }
}

class Settings {
    settingsElement = undefined;
    languageElement = undefined;
    darkMode_Light = undefined;
    darkMode_Dark = undefined;

    constructor() {
        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.render();
    }

    createElements = () => {
        this.settingsElement = document.createElement('div');
        this.languageElement = document.createElement('i');
        this.darkMode_Light = document.createElement('i');
        this.darkMode_Dark = document.createElement('i');
    }

    addClasses = () => {
        this.settingsElement.classList = 'settings';
        this.languageElement.classList = 'fa-regular fa-globe settings__language';
        this.darkMode_Light.classList = 'fa-solid fa-moon settings__darkMode';
        this.darkMode_Dark.classList = 'fa-regular fa-moon settings__darkMode';
    }

    addSpecials = () => {
        this.settingsElement.id = 'settings';
        this.settingsElement.setAttribute('data-darkMode', 'off');
        this.darkMode_Light.setAttribute('data-darkModeSwitch', 'off');
        this.darkMode_Dark.setAttribute('data-darkModeSwitch', 'on');
    }

    render = () => {
        this.settingsElement.appendChild(this.languageElement);
        this.settingsElement.appendChild(this.darkMode_Light);
        this.settingsElement.appendChild(this.darkMode_Dark);
    }
}