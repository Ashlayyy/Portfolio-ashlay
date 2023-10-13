/* eslint-disable no-unused-vars */
class ProjectCard {
    data = undefined;
    totalData = undefined;
    projectPage = undefined;
    totalProjectPageDone = false;

    constructor(data, totalData, projectPage) {
        this.data = data;
        this.totalData = totalData;
        this.projectPage = projectPage;
            
        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.addEventListeners();
        this.render();
    }

    createElements = () => {
        console.log('Hello!', this.data.solo)
        this.cardMainElement = document.createElement('section');
        this.cardImage = document.createElement('img');
        this.cardNameText = document.createElement('p');
        this.cardText = document.createElement('p');
        this.buttonDividerOne = document.createElement('div');

        if (this.data.solo != '') { this.soloElement = document.createElement('p') }
        if (this.data.githubUrl != '') { this.cardGithHubButton = document.createElement('button') }
        if (this.data.liveUrl != '') { this.liveButton = document.createElement('button') }
        if (this.totalProjectPageDone) { this.cardExploreButton = document.createElement('button') }
    }

    addClasses = () => {
        this.cardMainElement.classList = 'ProjectCard';
        this.cardImage.classList = 'ProjectCard_img';
        this.cardNameText.classList = 'ProjectCard_name';
        this.cardText.classList = 'ProjectCard_text';
        this.buttonDividerOne.classList = 'ProjectCard_divider';

        if (this.data.solo != '') { this.soloElement.classList = 'ProjectCard_solo' }
        if (this.data.githubUrl != '') { this.cardGithHubButton.classList = 'ProjectCard_github ProjectCard_button' }
        if (this.data.liveUrl != '') { this.liveButton.classList = 'ProjectCard_live ProjectCard_button' }
        if (this.totalProjectPageDone) { this.cardExploreButton.classList = 'ProjectCard_explore ProjectCard_button' }
    }

    addSpecials = () => {
        this.cardMainElement.id = this.data.id;
        this.cardNameText.innerText = this.data.name;
        this.cardImage.src = this.data.imgUrl;
        //this.soloElement.innerText = this.data.solo;
        this.cardText.innerText = this.data.shortProjectTextDutch;

        if (this.data.solo != '') { this.soloElement.innerText = this.data.solo }
        if (this.data.githubUrl != '') { this.cardGithHubButton.innerHTML = '<i class="fa-brands fa-square-github fa-4x"></i>' }
        if (this.data.liveUrl != '') { this.liveButton.innerHTML = '<i class="fa-solid fa-globe fa-4x"></i>' }
        if (this.totalProjectPageDone) { this.cardExploreButton.innerHTML = '<i class="fa-solid fa-circle-info fa-4x"></i>' }
    }

    addEventListeners = () => {
        if (this.data.githubUrl != '') {
            this.cardGithHubButton.addEventListener('click', () => {
                window.open(this.data.githubUrl);
            })
        }

        if (this.data.liveUrl != '') {
            this.liveButton.addEventListener('click', () => {
                window.open(this.data.liveUrl);
            })
        }

        if (this.totalProjectPageDone) {
            this.cardExploreButton.addEventListener('click', () => {
                window.localStorage.setItem('projectID', this.data.id)
                location.href = '/project';
            })
        }
    }

    render = () => {
        this.projectPage.RenderEngine.render(this.cardMainElement, this.cardNameText);
        this.projectPage.RenderEngine.render(this.cardMainElement, this.cardImage);
        if (this.data.solo != '') { this.projectPage.RenderEngine.render(this.cardMainElement, this.soloElement) }
        this.projectPage.RenderEngine.render(this.cardMainElement, this.cardText);
        this.projectPage.RenderEngine.render(this.cardMainElement, this.buttonDividerOne);

        if (this.data.liveUrl != '') { this.projectPage.RenderEngine.render(this.buttonDividerOne, this.liveButton) }
        if (this.totalProjectPageDone) { this.projectPage.RenderEngine.render(this.buttonDividerOne, this.cardExploreButton) }
        if (this.data.githubUrl != '') { this.projectPage.RenderEngine.render(this.buttonDividerOne, this.cardGithHubButton) }
    }
}