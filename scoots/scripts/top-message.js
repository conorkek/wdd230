function closeMessage() {
    document.getElementById("top-message").style.display = "none";
}
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cozumel&units=imperial&appid=bb724cbb455f5568224b69fb544c162b`)
    .then(response => response.json())
    .then(data => {
        const highTemp = Math.round(data.main.temp_max);
        document.getElementById("high-temp").textContent = `Today's High: ${highTemp}°F`;
    })
    .catch(error => {
        console.error("Error fetching high temperature:", error);
        document.getElementById("high-temp").textContent = "Weather data unavailable";
    });