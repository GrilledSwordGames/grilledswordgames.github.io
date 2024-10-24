window.addEventListener('resize', function () {
    const windowWidth = window.innerWidth;
    const icons = document.querySelectorAll('.nav-icon');
    const texts = document.querySelectorAll('.nav-text');

    // Dynamic icon resizing based on window width
    icons.forEach(icon => {
        if (windowWidth < 600) {
            icon.style.height = '18px';
        } else if (windowWidth < 900) {
            icon.style.height = '20px';
        } else {
            icon.style.height = '24px';
        }
    });

    // Dynamic text visibility based on window width
    texts.forEach(text => {
        if (windowWidth < 900) {
            text.style.display = 'none';
        } else {
            text.style.display = 'inline';
        }
    });
});

// Trigger the function once on page load
window.dispatchEvent(new Event('resize'));