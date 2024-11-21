// Disable right-click (context menu)
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable F12, Ctrl+Shift+I (DevTools), and Ctrl+U (View Source)
document.onkeydown = function (e) {
    // Disable F12
    if (e.keyCode == 123) {
        return false;
    }
    // Disable Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
};

// Check if the page is being accessed via 'view-source:' and redirect to 404 page
if (window.location.protocol === 'view-source:rundown-ict.vercel.app') {
    window.location.href = '/404.html';  // Redirect to your 404 page
}

// Make the page visible after everything is loaded
window.onload = function () {
    document.documentElement.style.visibility = 'visible';
};
