/* clock + home bar navigation */

document.addEventListener('DOMContentLoaded', () => {
    // clock
    const timeDisplay = document.getElementById('time-display');
    if (timeDisplay) {
        function updateTime() {
            timeDisplay.textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        }
        updateTime();
        setInterval(updateTime, 1000);
    }

    // send back to index 
    const homeBar = document.getElementById('home-bar');
    if (homeBar && window.location.pathname.indexOf('index') === -1) {
        homeBar.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
