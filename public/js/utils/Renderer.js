/* eslint-disable no-unused-vars */
class RenderEngine {
    render(whereToRender, whatToRender) {
        if(typeof whereToRender == 'string') {
            document.getElementsByTagName(whereToRender)[0].appendChild(whatToRender);
        } else {
            whereToRender.appendChild(whatToRender)}

    }
}