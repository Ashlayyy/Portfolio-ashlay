class App {
    api = undefined;
    home = undefined;

    placeToRender = undefined;

    constructor(placeToRender) {
        this.placeToRender = document.getElementsByTagName(placeToRender)[0];
        this.home = new Home().mainElement;
        //this.api = new Api();

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.home);
    }
}

const app = new App('body');