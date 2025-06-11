/* eslint-disable no-unused-vars */
class HumanAvatar {
	data = undefined;
	aboutPage = undefined;
	humanAvatar = undefined;
	imageAvatar = undefined;

	constructor(data, aboutPage) {
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
		this.button = document.createElement('button');
		this.link = document.createElement('a');
	};

	addClasses = () => {
		this.containerElement.classList = 'avatar_container';
		this.secondContainer.classList = 'avatar_textContainer';
		this.humanAvatar.classList = 'avatar_figure';
		this.imageAvatar.classList = 'avatar_image';
		this.textAboutMe.classList = 'avatar_text';
		this.button.classList = 'avatar_button';
		this.link.classList = 'avatar_link';
	};

	addSpecials = () => {
		this.imageAvatar.src = 'images/AboutMe/Foto-Ashlay.webp';
		this.textAboutMe.innerText = this.data.Translating.Dutch.TextAboutMe;
		this.button.innerText = 'Download CV';
		this.link.setAttribute('download', 'CV Ashlay Steur');
		this.link.setAttribute('href', '/download/ashlaysteur-cv.pdf');
	};

	render = () => {
		this.aboutPage.RenderEngine.render(this.containerElement, this.humanAvatar);
		this.aboutPage.RenderEngine.render(this.humanAvatar, this.imageAvatar);
		this.aboutPage.RenderEngine.render(this.secondContainer, this.textAboutMe);
		this.aboutPage.RenderEngine.render(this.secondContainer, this.link);
		this.aboutPage.RenderEngine.render(this.link, this.button);
	};
}
