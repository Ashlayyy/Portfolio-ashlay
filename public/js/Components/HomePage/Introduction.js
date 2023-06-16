/* eslint-disable no-unused-vars */
class Introduction {
    introductionElement = undefined;
    h2Element = undefined;
    h3Element = undefined;
    textElement = undefined;
    buttonWrapperElement = undefined;
    buttonElement = undefined;
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
        this.introductionElement = document.createElement('section');
        this.h2Element = document.createElement('h2');
        this.h3Element = document.createElement('h3');
        this.textElement = document.createElement('p');
        this.buttonWrapperElement = document.createElement('div');
        this.buttonElement = document.createElement('button');
    }

    addClasses = () => {
        this.introductionElement.classList = 'introduction';
        this.h2Element.classList = 'introduction__name';
        this.h3Element.classList = 'introduction__title';
        this.textElement.classList = 'introduction__text';
        this.buttonWrapperElement.classList = 'introduction__buttonWrapper';
        this.buttonElement.classList = 'introduction__button';
    }
    
    addSpecials = () => {
        this.h2Element.innerText = 'Ashlay';
        this.h3Element.innerText = 'Developer';
        this.textElement.innerText = 'Hello! This is my portfolio as a software developer. Look through all you want!';
        this.buttonElement.id = 'introduction__button';
        this.buttonElement.innerText = 'My projects';
    }

    addClickListeners = () => {
        this.buttonElement.addEventListener('click', () => {
            const element = document.getElementById('projects');
            if(element == null || element == undefined || element == '') {
                return
            } else element.scrollIntoView({behavior: 'smooth'}, false);
        })
    }

    render = () => {
        this.introductionElement.appendChild(this.h2Element);
        this.introductionElement.appendChild(this.h3Element);
        this.introductionElement.appendChild(this.textElement);
        this.introductionElement.appendChild(this.buttonWrapperElement);
        this.buttonWrapperElement.appendChild(this.buttonElement);
    }
}