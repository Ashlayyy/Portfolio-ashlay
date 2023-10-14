/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class UpcomingProjectsPage {
    RenderEngine = undefined;
    data = undefined;
    mainElement = undefined;
    isUpcoming = true;
    
    constructor (data, RenderEngine) {
        this.data = data;
        this.RenderEngine = RenderEngine;

        this.createElements();
        this.addClasses();
        this.addSpecials();
        this.render();
    }

    createElements = () => {
        this.mainElement = document.createElement('section');
        this.titleElement = document.createElement('h2');
        this.divider = document.createElement('div');
    }

    addClasses = () => {
        this.mainElement.classList = 'upcoming';
        this.titleElement.classList = 'upcoming_title';
        this.divider.classList = 'upcoming_divider';
    }
    
    addSpecials = () => {
        this.mainElement.id = 'upcoming';
        this.titleElement.innerText = "Aankomende Projecten";
    }

    render = () => {
        this.RenderEngine.render(this.mainElement, this.titleElement);
        this.RenderEngine.render(this.mainElement, this.divider);

        for(let i = 0; i < this.data.UpComingProjects.length; i++) {
            if(this.data.UpComingProjects[i]['hidden'] == true) return console.log('hidden!');
            console.log(this.data.UpComingProjects[i].hidden)
            this.RenderEngine.render(this.divider, new ProjectCard(this.data.UpComingProjects[i], this.data.UpComingProjects, this).cardMainElement);
        }
    }
}