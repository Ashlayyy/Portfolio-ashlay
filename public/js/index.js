/* eslint-disable no-undef */
class App {
    data = undefined;
    home = undefined;

    placeToRender = undefined;

    constructor(placeToRender) {
        this.placeToRender = document.getElementsByTagName(placeToRender)[0];
        this.RenderEngine = new RenderEngine();
        this.data = new Data();
        this.home = new HomePage(this.data, this.RenderEngine);
        this.aboutme = new AboutMePage(this.data, this.RenderEngine)

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.home.mainElement);
    }
}

const mainApp = () => {
    try {
        new App('body');
    } catch (error) {
        location.reload();
    }
}

mainApp();