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

// Disable view-source protocol on URL
if (window.location.protocol === 'view-source:') {
    window.location.href = 'about:blank';  // Redirect away from view-source
}

// Make the page visible after everything is loaded
window.onload = function () {
    document.documentElement.style.visibility = 'visible';
};
