/* eslint-disable no-unused-vars */
class ProjectCard {
    data = undefined;
    totalData = undefined;
    projectPage = undefined;

    constructor (data, totalData, projectPage) {
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
        this.cardMainElement = document.createElement('section');
        this.cardImage = document.createElement('img');
        this.cardNameText = document.createElement('p');
        this.cardText = document.createElement('p');
        this.buttonDividerOne = document.createElement('div');
        this.cardGithHubButton = document.createElement('button');
        this.cardExploreButton = document.createElement('button');
        this.liveButton = document.createElement('button');
    }

    addClasses = () => {
        this.cardMainElement.classList = 'ProjectCard';
        this.cardImage.classList = 'ProjectCard_img';
        this.cardNameText.classList = 'ProjectCard_name';
        this.cardText.classList = 'ProjectCard_text';
        this.buttonDividerOne.classList = 'ProjectCard_divider';
        this.cardGithHubButton.classList = 'ProjectCard_github ProjectCard_button';
        this.cardExploreButton.classList = 'ProjectCard_explore ProjectCard_button';
        this.liveButton.classList = 'ProjectCard_live ProjectCard_button';
    }
    
    addSpecials = () => {
        this.cardMainElement.id = this.data.id;
        this.cardNameText.innerText = this.data.name;
        this.cardImage.src = this.data.imgUrl;
        this.cardText.innerText = this.data.shortProjectTextDutch;
        this.cardGithHubButton.innerHTML = '<i class="fa-brands fa-square-github fa-4x"></i>';
        this.liveButton.innerHTML = '<i class="fa-solid fa-globe fa-4x"></i>';
        this.cardExploreButton.innerHTML = '<i class="fa-solid fa-circle-info fa-4x"></i>';
    }

    addEventListeners = () => {
        this.cardGithHubButton.addEventListener('click', () => {
            window.open(this.data.githubUrl);
        })

        this.liveButton.addEventListener('click', () => {
            window.open(this.data.liveUrl);
        })

        this.cardExploreButton.addEventListener('click', () => {
            window.localStorage.setItem('projectID', this.data.id)
            location.href = '/project';
        })
    }

    render = () => {
        this.projectPage.RenderEngine.render(this.cardMainElement, this.cardNameText);
        this.projectPage.RenderEngine.render(this.cardMainElement, this.cardImage);
        this.projectPage.RenderEngine.render(this.cardMainElement, this.cardText);
        this.projectPage.RenderEngine.render(this.cardMainElement, this.buttonDividerOne);
        this.projectPage.RenderEngine.render(this.buttonDividerOne, this.cardGithHubButton);
        this.projectPage.RenderEngine.render(this.buttonDividerOne, this.liveButton);
        this.projectPage.RenderEngine.render(this.buttonDividerOne, this.cardExploreButton);
    } 
}