/* eslint-disable no-undef */
class App {
    data = undefined;
    home = undefined;

    placeToRender = undefined;

    constructor(placeToRender) {
        this.placeToRender = document.getElementsByTagName(placeToRender)[0];
        this.data = new Data();
        this.home = new Home(this.data).mainElement;

        this.render();
    }

    render = () => {
        this.placeToRender.appendChild(this.home);
    }
}
new App('body');