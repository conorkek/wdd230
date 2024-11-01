document.getElementById("year").innerHTML = (new Date().getFullYear()); document.getElementById("lastModified").innerHTML = "Last Modified: " + (new Date(document.lastModified));

// Get the current visit count from localStorage
let visitCount = localStorage.getItem('visitCount');

// Check if a visit count exists; if not, initialize it to 1
if (visitCount) {
    visitCount = parseInt(visitCount) + 1;  // Increment the count
} else {
    visitCount = 1;  // First visit
}

// Update localStorage with the new count
localStorage.setItem('visitCount', visitCount);

// Display the visit count on the page
document.getElementById('visitCounter').textContent = visitCount;
