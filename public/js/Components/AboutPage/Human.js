/* eslint-disable no-unused-vars */
class HumanAvatar {
    data = undefined;
    aboutPage = undefined;
    humanAvatar = undefined;
    imageAvatar = undefined;

    constructor (data, aboutPage) {
        this.data = data;
        this.aboutPage = aboutPage;

        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.render();
    }

    createElements = () => {
        this.containerElement = document.createElement('div');
        this.secondContainer = document.createElement('div');
        this.humanAvatar = document.createElement('figure');
        this.imageAvatar = document.createElement('img');
        this.textAboutMe = document.createElement('p');
    }

    addClasses = () => {
        this.containerElement.classList = 'avatar_container';
        this.secondContainer.classList = 'avatar_textContainer';
        this.humanAvatar.classList = 'avatar_figure';
        this.imageAvatar.classList = 'avatar_image';
        this.textAboutMe.classList = 'avatar_text';
    }
    
    addSpecials = () => {
        this.imageAvatar.src = '/images/Foto-Ashlay.png';
        this.textAboutMe.innerText = this.data.Translating.Dutch.TextAboutMe;
    }

    render = () => {
        this.aboutPage.RenderEngine.render(this.containerElement, this.humanAvatar);
        this.aboutPage.RenderEngine.render(this.humanAvatar, this.imageAvatar);
        this.aboutPage.RenderEngine.render(this.secondContainer, this.textAboutMe);
    }
}