const baseURL = "https://conorkek.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

// Fetch and display links
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons);
    } catch (error) {
        console.error("Error fetching the links JSON data:", error);
    }
}

// Function to display links dynamically
function displayLinks(lessons) {
    const linksContainer = document.getElementById("dynamic-links");
    linksContainer.innerHTML = ""; // Clear any existing content

    lessons.forEach(lesson => {
        const lessonItem = document.createElement("li");
        lessonItem.textContent = `${lesson.lesson}: `;

        lesson.links.forEach((link, index) => {
            const linkElement = document.createElement("a");
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;
            linkElement.target = "_blank";

            lessonItem.appendChild(linkElement);

            // Add separator if not the last link in the array
            if (index < lesson.links.length - 1) {
                lessonItem.append(" | ");
            }
        });

        linksContainer.appendChild(lessonItem);
    });
}

// Call the function
getLinks();
