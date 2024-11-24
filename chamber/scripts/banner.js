window.onload = function () {
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) { // 1 = Monday, 2 = Tuesday, 3 = Wednesday
        const banner = document.createElement('div');
        banner.className = 'meet-greet-banner';
        banner.innerHTML = `
            <p>Don't miss our meet and greet on Wednesday at 7:00 PM!</p>
            <button class="close-banner">❌</button>
        `;
        document.body.insertBefore(banner, document.body.firstChild);

        // Close banner functionality
        document.querySelector('.close-banner').addEventListener('click', () => {
            banner.style.display = 'none';
        });
    }
};
