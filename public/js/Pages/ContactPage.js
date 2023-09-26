/* eslint-disable no-unused-vars */
class ContactPage {
    RenderEngine = undefined;
    data = undefined;
    mainElement = undefined;
    
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
        this.title = document.createElement('h2');
        this.sentence = document.createElement('p');
        this.email = document.createElement('p');
        this.phone = document.createElement('p');
    }

    addClasses = () => {
        this.mainElement.classList = 'contact';
        this.title.classList = 'contact_title';
        this.sentence.classList = 'contact_sentence';
        this.email.classList = 'contact_email';
        this.phone.classList = 'contact_phone';
    }
    
    addSpecials = () => {
        this.mainElement.id = 'Contact';
        this.title.innerText = 'Contact';
        this.sentence.innerText = 'Ik ben bereikbaar per telefoon en email, stuur een berichtje en ik reageer zo spoedig mogelijk op u. U kunt ook eventueel bellen.';
        this.phone.innerText = 'Telefoon: +31 06 30318130';
        this.email.innerText = 'Email: ashlay.prive@gmail.com';
    }

    render = () => {
        this.RenderEngine.render(this.mainElement, this.title);
        this.RenderEngine.render(this.mainElement, this.sentence);
        this.RenderEngine.render(this.mainElement, this.email);
        this.RenderEngine.render(this.mainElement, this.phone);
    }
}