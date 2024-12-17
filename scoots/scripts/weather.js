// Weather API Integration
document.addEventListener("DOMContentLoaded", () => {
    fetchWeather();
});

function fetchWeather() {
    const apiKey = "bb724cbb455f5568224b69fb544c162b"; // Your API key
    const city = "Cozumel";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`) // Changed units to imperial
        .then(response => response.json())
        .then(data => {
            document.getElementById("high-temp").innerText = `High Temp: ${data.main.temp_max}°F`;
            document.getElementById("weather-info").innerHTML = `
                <p>Temperature: ${data.main.temp}°F</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Weather: ${data.weather[0].description}</p>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
            `;
        })
        .catch(error => console.error("Error fetching weather data:", error));
}

function closeMessage() {
    document.getElementById("top-message").style.display = "none";
}