class Cleaner {
    clean(whereToClean) {
        document.querySelectorAll(whereToClean)[0].innerHTML = '';
    }
}