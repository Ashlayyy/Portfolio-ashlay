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
        this.divider = document.createElement('div');
        this.github = document.createElement('p');
        this.discord = document.createElement('p');
    }

    addClasses = () => {
        this.mainElement.classList = 'contact';
        this.title.classList = 'contact_title';
        this.sentence.classList = 'contact_sentence';
        this.email.classList = 'contact_email';
        this.phone.classList = 'contact_phone';
        this.divider.classList = 'contact_divider';
        this.github.classList = 'contact_github';
        this.discord.classList = 'contact_discord';
    }
    
    addSpecials = () => {
        this.mainElement.id = 'Contact';
        this.title.innerText = 'Contact';
        this.sentence.innerText = 'Heb je interesse gekregen naar aanleiding van mijn werk of wil je gewoon praten? Ik ben bereikbaar met onderstaande gegevens. Ik reageer dan zo snel mogelijk.';
        this.phone.innerHTML = '<p>Telefoon: <br> <a class="contact_link" href="tel:0630318130">06 30318130</a></p>';
        this.email.innerHTML = '<p>Email: <br> <a class="contact_link" href="mailto:ashlay.prive@gmail.com">ashlay.prive@gmail.com</a></p>';
        this.github.innerHTML = '<a class="contact_link" href="https://github.com/Ashlayyy" target="__blank"><i class="fa-brands fa-github fa-3x"></i></a>';
        this.discord.innerHTML = '<p style="display:none">Discord gebruikersnaam: <br> <i class="contact_link">ashlayyyyyy</i></p>';
    }

    render = () => {
        this.RenderEngine.render(this.mainElement, this.title);
        this.RenderEngine.render(this.mainElement, this.sentence);
        this.RenderEngine.render(this.mainElement, this.email);
        this.RenderEngine.render(this.mainElement, this.phone);
        this.RenderEngine.render(this.mainElement, this.discord);
        this.RenderEngine.render(this.divider, this.github);
        this.RenderEngine.render(this.mainElement, this.divider);
    }
}