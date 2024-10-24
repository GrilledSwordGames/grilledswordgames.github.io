// Toggle the menu icon and dropdown visibility
function toggleMenu(menuIcon) {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); // Toggle visibility of the navigation
    menuIcon.classList.toggle('active'); // Add active class to the menu icon
}

// Toggle the language dropdown
function toggleLanguageDropdown(event) {
    event.stopPropagation(); // Prevent click event from bubbling up
    const languageDropdown = document.querySelector('.language-dropdown');
    languageDropdown.classList.toggle('active'); // Toggle the active class

    // Close the dropdown if clicked outside of it
    document.addEventListener('click', function (event) {
        if (!languageDropdown.contains(event.target)) {
            languageDropdown.classList.remove('active'); // Hide dropdown if clicked outside
        }
    });
}

// Ensure the dropdown closes when clicking outside
document.addEventListener('click', function (event) {
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageSelector = document.querySelector('.language-selector');
    if (!languageSelector.contains(event.target) && languageDropdown.classList.contains('active')) {
        languageDropdown.classList.remove('active'); // Hide dropdown if clicked outside
    }
});