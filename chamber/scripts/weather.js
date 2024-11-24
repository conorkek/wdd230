// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const forecast = document.querySelector('#forecast');

// Declare URLs for the APIs
const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=33.8847&lon=-118.4108&units=imperial&appid=bb724cbb455f5568224b69fb544c162b';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.8847&lon=-118.4108&units=imperial&appid=bb724cbb455f5568224b69fb544c162b';

// Fetch Current Weather Data
async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

// Fetch Weather Forecast Data
async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

// Display Current Weather
function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const desc = data.weather[0].description;
    weatherDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

// Display 3-Day Forecast
function displayForecast(data) {
    forecast.innerHTML = ''; // Clear previous forecast data
    const forecastData = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
    forecastData.forEach(day => {
        const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
        const temp = Math.round(day.main.temp);
        const desc = day.weather[0].description;
        const listItem = document.createElement('li');
        listItem.textContent = `${date}: ${temp}°F, ${desc}`;
        forecast.appendChild(listItem);
    });
}

// Fetch both current weather and forecast
fetchCurrentWeather();
fetchForecast();
