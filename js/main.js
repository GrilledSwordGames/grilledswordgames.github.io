document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.offsetHeight;

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight - 50) { // Adjust based on when you want the header to darken
            header.classList.add('scrolled-header');
        } else {
            header.classList.remove('scrolled-header');
        }
    });

    // Small animation for hero section text
    const heroText = document.querySelector(".hero h2");
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(-50px)";

    setTimeout(() => {
        heroText.style.transition = "all 1s ease-in-out";
        heroText.style.opacity = 1;
        heroText.style.transform = "translateY(0)";
    }, 500);

    // Small animation for hero section paragraph
    const heroParagraph = document.querySelector(".hero p");
    heroParagraph.style.opacity = 0;
    heroParagraph.style.transform = "translateY(50px)";

    setTimeout(() => {
        heroParagraph.style.transition = "all 1s ease-in-out";
        heroParagraph.style.opacity = 1;
        heroParagraph.style.transform = "translateY(0)";
    }, 1000);

    const games = [
        {
            imgSrc: 'img/mindscape.png',
            title: 'MindScape',
            description: "Don't overlook any anomalies.",
            downloadLink: 'coming-soon.html', // Navigates to countdown page
        },
        {
            imgSrc: 'img/comingSoon.png',
            title: 'Typing Horror',
            description: 'Coming Soon!',
            downloadLink: 'coming-soon.html', // Navigates to countdown page
        },
        // Add more game objects as needed
    ];

    // Function to create and append game items
    function renderGames() {
        const gamesList = document.getElementById('gamesList');

        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.className = 'game-item';
            gameItem.innerHTML = `
                <img src="${game.imgSrc}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="${game.downloadLink}" class="btn-download">Download Game</a> <!-- Removed download attribute -->
                `;

            gamesList.appendChild(gameItem);
        });
    }

    // Call the function to render games
    renderGames();
});
