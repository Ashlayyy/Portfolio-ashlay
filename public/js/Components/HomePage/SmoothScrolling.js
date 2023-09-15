/* eslint-disable no-unused-vars */
class SmoothScrolling {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            const selector = document.querySelectorAll('a[href^="#"]');
            selector.forEach(anchor => {
                console.log(anchor);
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();

                    const element = document.querySelector(this.getAttribute('href'))

                    if (element == null || element == undefined || element == '') {
                        return
                    } else {
                        element.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        })
    }
}