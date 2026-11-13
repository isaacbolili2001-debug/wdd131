// Static weather values for this assignment.
const temperature = 29; // degrees Celsius
const windSpeed = 12; // kilometers per hour

/**
 * Calculates wind chill in Celsius.
 * @param {number} temp - Air temperature in degrees Celsius.
 * @param {number} speed - Wind speed in kilometers per hour.
 * @returns {number} Wind chill rounded to one decimal place.
 */
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Only calculate wind chill when the metric requirements are satisfied.
const windChillElement = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}

// Display the current year and the document's last modified date.
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;
