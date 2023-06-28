/* eslint-disable no-undef */
class App {
    data = undefined;
    home = undefined;
    aboutMe = undefined;
    placeToRender = undefined;
    smoothScrolling = undefined;

    constructor(placeToRender) {
        this.placeToRender = document.getElementsByTagName(placeToRender)[0];
        this.RenderEngine = new RenderEngine();
        this.data = new Data();
        this.smoothScrolling = new SmoothScrolling();
        this.home = new HomePage(this.data, this.RenderEngine);
        this.aboutMe = new AboutMePage(this.data, this.RenderEngine)
        this.projects = new ProjectsPage(this.data, this.RenderEngine);
        this.contact = new ContactPage(this.data, this.RenderEngine);

        document.querySelectorAll('body')[0].scrollIntoView({behavior: 'instant'})

        this.render();
    }

    render = () => {
        this.RenderEngine.render(this.placeToRender, this.home.mainElement);
        this.RenderEngine.render(this.placeToRender, this.aboutMe.mainElement);
        this.RenderEngine.render(this.placeToRender, this.projects.mainElement);
        this.RenderEngine.render(this.placeToRender, this.contact.mainElement);
    }
}

const mainApp = () => {
    try {
        new App('body');
    } catch (error) {
        console.log(error);
        //location.reload();
    }
}

mainApp();