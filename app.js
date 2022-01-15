'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    // default is light-theme so this basically 
    // toggle to add and remove the dark and light theme
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;

    if (className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);

});