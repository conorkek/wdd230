const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});