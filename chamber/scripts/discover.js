document.addEventListener('DOMContentLoaded', function () {
    const visitMessage = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = Date.now();

    if (!lastVisit) {
        visitMessage.innerText = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            visitMessage.innerText = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            visitMessage.innerText = `You last visited 1 day ago.`;
        } else {
            visitMessage.innerText = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }
    localStorage.setItem("lastVisit", currentDate);
});