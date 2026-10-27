const currentYearElement = document.getElementById("currentyear");
const today = new Date();
currentYearElement.textContent = today.getFullYear();

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
