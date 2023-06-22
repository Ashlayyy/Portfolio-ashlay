/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
class Setup {
    body = undefined;
    RenderEngine = undefined;
    Data = undefined;

    constructor(){
        this.constructorr();
    }

    constructorr = async () => {
        this.body = document.getElementsByTagName('body')[0];
        this.RenderEngine = new RenderEngine();
        this.Data = await new Data();

        for(let i = 0; i < this.Data.DataSetup.src.length; i++){
            new ScriptTag(this.body, this.Data.DataSetup.src[i], this);
        }
    }

    setData = async () => {
        this.Data = new Data();
    }
}

class ScriptTag {
    scriptTag = undefined;
    scriptSrc = undefined;
    Setup = undefined;
    
    constructor (placeToRender, scriptSrc, Setup) {
        this.scriptSrc = scriptSrc;
        this.placeToRender = placeToRender;
        this.Setup = Setup;
        this.scriptTag = document.createElement('script');
        this.scriptTag.src = this.scriptSrc;
        //if(scriptSrc == '/js/index.js') this.scriptTag.setAttribute('defer', '');
        this.Setup.RenderEngine.render(this.placeToRender, this.scriptTag);
    }
}

new Setup();