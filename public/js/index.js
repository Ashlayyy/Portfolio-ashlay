/* eslint-disable no-undef */
class App {
    data = undefined;
    home = undefined;
    aboutMe = undefined;
    placeToRender = undefined;
    finalData = undefined;

    constructor(placeToRender) {
        this.placeToRender = document.getElementsByTagName(placeToRender)[0];
        this.RenderEngine = new RenderEngine();
        this.data = new Data();
        (async () => {
            this.finalData = await Promise.resolve(this.data.data)
            this.home = new HomePage(this.finalData, this.RenderEngine);
            this.aboutMe = new AboutMePage(this.finalData, this.RenderEngine)
            this.projects = new ProjectsPage(this.finalData, this.RenderEngine);
            this.upcomingProjects = new UpcomingProjectsPage(this.finalData, this.RenderEngine);
            this.contact = new ContactPage(this.finalData, this.RenderEngine);
            await this.render();
        })()
    }

    render = async () => {
        this.RenderEngine.render(this.placeToRender, this.home.navigation);
        this.RenderEngine.render(this.placeToRender, this.home.mainElement);
        this.RenderEngine.render(this.placeToRender, this.aboutMe.mainElement);
        this.RenderEngine.render(this.placeToRender, this.projects.mainElement);
        this.RenderEngine.render(this.placeToRender, this.upcomingProjects.mainElement);
        this.RenderEngine.render(this.placeToRender, this.contact.mainElement);
        this.RenderEngine.render(this.placeToRender, this.home.mobileNavigation);
    }
}

const mainApp = () => {
    try {
        new App('body');
    } catch (error) {
        console.log(error);
    }
}

mainApp();