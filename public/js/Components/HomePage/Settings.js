/* eslint-disable no-unused-vars */
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