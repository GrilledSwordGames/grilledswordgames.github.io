// Variables to track scroll position
let lastScrollTop = 0;
const header = document.querySelector('header'); // Select the header element

// Function to handle scroll event
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down: Hide header
        header.classList.remove('header-visible');
        header.classList.add('header-hidden');
    } else {
        // Scrolling up: Show header
        header.classList.remove('header-hidden');
        header.classList.add('header-visible');
    }

    lastScrollTop = scrollTop; // Update last scroll position
});