/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Api {
    data = undefined;
    async getData(url) {
        await fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.data = data;
            });
        return this.data;
    }
}