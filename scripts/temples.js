const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});

const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

const today = new Date();
currentYear.textContent = today.getFullYear();

lastModified.textContent = `Last Modification: ${document.lastModified}`;

const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('open');
        hambutton.classList.remove('open');
    });
});