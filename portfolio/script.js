// Navigation scrolling effect

window.addEventListener('scroll', checkNavColor);

function checkNavColor() {
    let header = document.getElementById('header');
    let logo = document.getElementById('logo');
    let buttons = document.querySelectorAll('#buttons > a')
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        logo.classList.add('scrolled-colors');

        buttons.forEach(button => {
            button.style.color = 'black';
        });
    } else {
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled-colors');
        
        buttons.forEach(button => {
            button.style.color = '#f9f9f9';
        });
    }
}

// Buttons front page links

let linkedinButton = document.getElementById('linkedin');
let githubButton = document.getElementById('github');

linkedinButton.onclick = () => {
    location.href = 'https://www.linkedin.com/in/kimi-nikolov-1a9145205/';
}

githubButton.onclick = () => {
    location.href = 'https://github.com/kimin8';
}
