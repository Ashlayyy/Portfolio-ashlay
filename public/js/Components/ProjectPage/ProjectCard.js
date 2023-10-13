/* eslint-disable no-undef */
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
        this.cardMainElement = document.createElement('section');
        this.cardImage = document.createElement('img');
        this.cardNameText = document.createElement('p');
        this.cardText = document.createElement('p');
        this.buttonDividerOne = document.createElement('div');
        this.datumString = document.createElement('p');
        this.techStack = document.createElement('p');
        this.serverTechStack = document.createElement('p');

        if (this.data.status == 'finished') {
            if (this.data.dateEnded == '' || this.data.dateEnded == undefined) {
                this.duration = '';
                this.durationString =
                    `
Datum begonnen: ${this.data.dateBegon}
Datum geeindig: Nog niet klaar          
`
            } else {
                this.duration = new DataCalc(new Date(this.data.dateBegon), new Date(this.data.dateEnded)).result;
                this.durationString =
                `
Datum begonnen: ${this.data.dateBegon}
Datum geeindig: ${this.data.dateEnded}
Duur: ${this.duration}
`;
            }
        } else {
            this.durationString = 'Not started yet';
        }

        if (this.data.solo != '' && this.data.solo != undefined) { this.soloElement = document.createElement('p') }
        if (this.data.githubUrl != '') { this.cardGithHubButton = document.createElement('button') }
        if (this.data.liveUrl != '') { this.liveButton = document.createElement('button') }
        if (this.totalProjectPageDone) { this.cardExploreButton = document.createElement('button') }
    }

    addClasses = () => {
        if (this.projectPage.isUpcoming == true) {this.cardMainElement.classList = 'ProjectCard_Upcoming'} else this.cardMainElement.classList = 'ProjectCard';
        this.cardImage.classList = 'ProjectCard_img';
        this.cardNameText.classList = 'ProjectCard_name';
        this.cardText.classList = 'ProjectCard_text';
        this.buttonDividerOne.classList = 'ProjectCard_divider';
        this.datumString.classList = 'ProjectCard_datums';
        this.techStack.classList = 'ProjectCard_stack';
        this.serverTechStack.classList = 'ProjectCard_serverStack';
        
        if (this.data.solo != '' && this.data.solo != undefined) { this.soloElement.classList = 'ProjectCard_solo' }
        if (this.data.githubUrl != '') { this.cardGithHubButton.classList = 'ProjectCard_github ProjectCard_button' }
        if (this.data.liveUrl != '') { this.liveButton.classList = 'ProjectCard_live ProjectCard_button' }
        if (this.totalProjectPageDone) { this.cardExploreButton.classList = 'ProjectCard_explore ProjectCard_button' }
    }

    addSpecials = () => {
        this.cardMainElement.id = this.data.id;
        this.cardNameText.innerText = this.data.name;
        this.cardImage.src = this.data.imgUrl;
        this.cardText.innerText = this.data.shortProjectTextDutch;
        this.datumString.innerText = this.durationString;

        if (this.projectPage.isUpcoming == true) {
            console.log(this.data)
            this.techStack.innerText = `Verwachting: ${this.data.verwachteTechStack}`
            if (this.data.verwachteServerTechStack != '' && this.data.verwachteServerTechStack != undefined) this.serverTechStack.innerText = `Verwachting server: ${this.data.verwachteServerTechStack}`
        } else {
            this.techStack.innerText = `Talen gebruikt: ${this.data.TechStack}`
            if (this.data.ServerTechStack != '' && this.data.ServerTechStack != undefined) this.serverTechStack.innerText = `Server talen: ${this.data.ServerTechStack}`
        }
        if (this.data.solo != '' && this.data.solo != undefined) { this.soloElement.innerText = this.data.solo }
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
        if (this.data.solo != '' && this.data.solo != undefined) { this.projectPage.RenderEngine.render(this.cardMainElement, this.soloElement) }
        this.projectPage.RenderEngine.render(this.cardMainElement, this.cardText);
        this.projectPage.RenderEngine.render(this.cardMainElement, this.techStack);
        if ((this.data.ServerTechStack != '' && this.data.ServerTechStack != undefined) || (this.data.verwachteServerTechStack != '' && this.data.verwachteServerTechStack != undefined)) {this.projectPage.RenderEngine.render(this.cardMainElement, this.serverTechStack)}
        this.projectPage.RenderEngine.render(this.cardMainElement, this.datumString);
        this.projectPage.RenderEngine.render(this.cardMainElement, this.buttonDividerOne);

        if (this.data.liveUrl != '') { this.projectPage.RenderEngine.render(this.buttonDividerOne, this.liveButton) }
        if (this.totalProjectPageDone) { this.projectPage.RenderEngine.render(this.buttonDividerOne, this.cardExploreButton) }
        if (this.data.githubUrl != '') { this.projectPage.RenderEngine.render(this.buttonDividerOne, this.cardGithHubButton) }
    }
}