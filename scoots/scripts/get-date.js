// Get the last modified date
const lastEditSpan = document.getElementById("last-edit");

// Format the date to a more readable format
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
});

// Insert the formatted date into the placeholder
lastEditSpan.textContent = formattedDate;