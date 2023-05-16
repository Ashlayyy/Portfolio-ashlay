class App {
    api = undefined;
    home = undefined;

    placeToRender = undefined;

    constructor(placeToRender) {
        this.placeToRender = document.getElementsByTagName(placeToRender)[0];
        this.home = new Home();

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.home);
    }
}

const app = new App('body');