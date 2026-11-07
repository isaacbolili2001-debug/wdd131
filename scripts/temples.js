const hambutton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

hambutton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle("open");

    hambutton.textContent = isOpen ? "✕" : "☰";
    hambutton.setAttribute("aria-expanded", isOpen);
    hambutton.setAttribute(
        "aria-label",
        isOpen ? "close navigation" : "open navigation menu"
    );
});

const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

const today = new Date();
currentYear.textContent = today.getFullYear();

lastModified.textContent = `Last Modification: ${document.lastModified}`;

const navLinks = document.querySelectorAll("a");
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove("open");
        hambutton.textContent = "☰";
        hambutton.setAttribute("aria-expanded", "false");
        hambutton.setAttribute("arial-lebel", "open navigation menu");
    });
});