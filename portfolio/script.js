// Navigation scrolling effect

window.addEventListener('scroll', checkNavColor);
let navToggle = document.querySelector('.mobile-nav-toggle');
let buttons = document.querySelectorAll('#buttons > a')
let isScrolled = navToggle.getAttribute('data-scrolled');

function checkNavColor() {
    let width = window.innerWidth;
    let header = document.getElementById('header');
    let logo = document.getElementById('logo');

    if (window.scrollY > 0) {
        
        header.classList.add('scrolled');
        logo.classList.add('scrolled-colors');
        buttons.forEach(button => {
            button.style.color = 'black';
        });
        navToggle.setAttribute('data-scrolled', "true");
        navToggle.style.backgroundImage = "url('images/icon-hamburger-black.svg')";

    } else {
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled-colors');
        if(width > 1170) {
            buttons.forEach(button => {
                button.style.color = 'white';
            });
        }

        navToggle.setAttribute('data-scrolled', "false");
        navToggle.style.backgroundImage = "url('images/icon-hamburger-white.svg')";
    }
}

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    if(width <= 1170) {
        buttons.forEach(button => {
            button.style.color = 'black';
        });
    } else {
        buttons.forEach(button => {
            button.style.color = 'white';
        });
    }
})

// Buttons front page links

let linkedinButton = document.getElementById('linkedin');
let githubButton = document.getElementById('github');

linkedinButton.onclick = () => {
    location.href = 'https://www.linkedin.com/in/kimi-nikolov-1a9145205/';
}

githubButton.onclick = () => {
    location.href = 'https://github.com/kimin8';
}

// Responsive navigaiton

let primaryNav = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {

    let visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === "false") {
        primaryNav.setAttribute('data-visible', "true");
        navToggle.setAttribute('aria-expanded', "true");
        navToggle.style.backgroundImage = "url('images/icon-close.svg')";
    } else {
        primaryNav.setAttribute('data-visible', "false");
        navToggle.setAttribute('aria-expanded', "false");
        navToggle.style.backgroundImage = "url('images/icon-hamburger-white.svg')";
    }

});