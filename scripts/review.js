const reviewCountDisplay = document.querySelector("#reviewCount");
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

numReviews += 1;
window.localStorage.setItem("numReviews-ls", numReviews);

if (reviewCountDisplay) {
    reviewCountDisplay.textContent = numReviews;
}

const currentYear = document.querySelector("#currentyear");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");
if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
}