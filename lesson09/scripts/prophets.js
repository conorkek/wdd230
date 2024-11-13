const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets); // Send the array of prophets to displayProphets
}

getProphetData(); // Call the function to fetch data

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create a section element for the card
        let card = document.createElement('section');

        // Create elements for the prophet's full name and portrait
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // Populate the heading with the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the image attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the elements to the card
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append the card to the cards container
        cards.appendChild(card);
    });
};