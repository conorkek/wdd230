const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {  // Ensure input is not empty
        displayList(input.value); // Display the new chapter
        chaptersArray.push(input.value);  // Add chapter to the array
        setChapterList(); // Save updated array to localStorage
        input.value = ''; // Clear input field
        input.focus(); // Refocus input field
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove the ❌ symbol
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

