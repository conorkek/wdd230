function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        return Math.round(windChill * 10) / 10; // Rounding to one decimal
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const temp = parseFloat(document.getElementById("temp").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windChill").textContent = `Wind Chill: ${windChill}`;
});
