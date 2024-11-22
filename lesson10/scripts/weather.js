// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare URL with the API key and Trier's coordinates
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=bb724cbb455f5568224b69fb544c162b';

// Define the asynchronous function to fetch data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing
            displayResults(data); // Pass data to display function
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display weather data on the page
function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`; // Zero decimal points
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description; // Weather description
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1); // Capitalize first word
}

// Invoke the API fetch function
apiFetch();
