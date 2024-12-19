const apiKey = "bb724cbb455f5568224b69fb544c162b";
const city = "Cozumel";
const weatherIcon = document.getElementById("weather-icon");
const weatherTitle = document.getElementById("weather-title");
const weatherDescription = document.getElementById("weather-description");
const currentTemp = document.getElementById("current-temp");
const humidity = document.getElementById("humidity");
const forecastTemp = document.getElementById("forecast-temp");

// Fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
        );
        const data = await response.json();

        // Current weather
        const main = data.weather[0].main;
        const description = data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        const temp = Math.round(data.main.temp); // Temperature in Fahrenheit
        const humidityValue = data.main.humidity;

        // Update HTML
        weatherIcon.src = icon;
        weatherTitle.textContent = main;
        weatherDescription.textContent = description.charAt(0).toUpperCase() + description.slice(1);
        currentTemp.textContent = `${temp}°F`;
        humidity.textContent = `${humidityValue}%`;

        // Next day's forecast
        forecastTemp.textContent = `${Math.round(temp + 2)}°F`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherTitle.textContent = "Weather data unavailable";
        weatherDescription.textContent = "";
    }
}

fetchWeather();