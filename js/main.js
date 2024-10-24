document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    const heroHeight = heroSection.offsetHeight;
    const languageSelector = document.querySelector('.language-selector');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageLinks = document.querySelectorAll('.language-dropdown a');

    // Toggle the menu icon and dropdown visibility
    function toggleMenu(menuIcon) {
        nav.classList.toggle('active'); // Toggle visibility of the navigation
        menuIcon.classList.toggle('active'); // Add active class to the menu icon
    }

    // Toggle the language dropdown
    function toggleLanguageDropdown(event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        languageDropdown.classList.toggle('active'); // Toggle the active class
    }

    // Close the dropdown if clicked outside of it
    document.addEventListener('click', function (event) {
        if (!languageSelector.contains(event.target)) {
            languageDropdown.classList.remove('active'); // Hide dropdown if clicked outside
        }
    });

    // Set up event listeners
    languageSelector.querySelector('button').addEventListener('click', toggleLanguageDropdown);

    menuIcon.addEventListener('click', function () {
        toggleMenu(menuIcon);
    });

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight - 50) {
            header.classList.add('scrolled-header');
        } else {
            header.classList.remove('scrolled-header');
        }
    });

    // Animation for hero section text
    const heroText = document.querySelector(".hero h2");
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(-50px)";

    setTimeout(() => {
        heroText.style.transition = "all 1s ease-in-out";
        heroText.style.opacity = 1;
        heroText.style.transform = "translateY(0)";
    }, 500);

    const games = [
        {
            imgSrc: 'img/mindscape.png',
            title: 'MindScape',
            description: "Don't overlook any anomalies.",
            downloadLink: 'coming-soon.html',
        },
        {
            imgSrc: 'img/keyboard.png',
            title: 'Typing Story Project',
            description: "Interactive immersive experience.",
            downloadLink: '404.html',
        },
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
                <a href="#" class="btn-download">Coming Soon</a>
            `;

            gamesList.appendChild(gameItem);

            const downloadButton = gameItem.querySelector('.btn-download');
            downloadButton.addEventListener('click', function (event) {
                event.preventDefault();
                window.location.href = game.downloadLink;
            });
        });
    }

    renderGames();

    window.addEventListener('load', function () {
        const preloader = document.querySelector('.preloader');
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    });

    const translations = {
        en: {
            home: "Home",
            games: "Games",
            about: "About",
            contact: "Contact",
            title: "You are trapped",
            description: "Observe your surroundings...",
            projects: "My Games // Projects",
            aboutUs: "About Us",
            aboutDescription: "Crafting horror experiences that make your skin crawl and heart race.",
            contactMe: "Contact Me",
            placeholderName: "Your Name",
            placeholderEmail: "Your Email",
            placeholderMessage: "Your Message",
            submitButton: "Submit Message",
            scrollText: "Scroll Down",
            latestPosts: "Latest Posts",
            postsDescription: "Check out our latest posts on Facebook and Instagram",
            visitFB: "Visit My Facebook",
            visitIG: "Visit My Instagram",
        },
        es: {
            home: "Inicio",
            games: "Juegos",
            about: "Acerca de",
            contact: "Contacto",
            title: "Estás atrapado",
            description: "Observa tu entorno...",
            projects: "Mis Juegos // Proyectos",
            aboutUs: "Sobre Nosotros",
            aboutDescription: "Creando experiencias de horror que te hacen erizar la piel y acelerar el corazón.",
            contactMe: "Contáctame",
            placeholderName: "Tu Nombre",
            placeholderEmail: "Tu Correo Electrónico",
            placeholderMessage: "Tu Mensaje",
            submitButton: "Enviar Mensaje",
            scrollText: "Desplázate hacia abajo",
            latestPosts: "Últimas Publicaciones",
            postsDescription: "Mira nuestras últimas publicaciones en Facebook e Instagram",
            visitFB: "Visita Mi Facebook",
            visitIG: "Visita Mi Instagram",
        },
        fr: {
            home: "Accueil",
            games: "Jeux",
            about: "À propos",
            contact: "Contact",
            title: "Vous êtes piégé",
            description: "Observez votre environnement...",
            projects: "Mes Jeux // Projets",
            aboutUs: "À propos de nous",
            aboutDescription: "Créer des expériences d'horreur qui font dresser les cheveux et accélèrent le cœur.",
            contactMe: "Contactez-moi",
            placeholderName: "Votre Nom",
            placeholderEmail: "Votre Email",
            placeholderMessage: "Votre Message",
            submitButton: "Envoyer le message",
            scrollText: "Faites défiler vers le bas",
            latestPosts: "Derniers articles",
            postsDescription: "Découvrez nos derniers articles sur Facebook et Instagram",
            visitFB: "Visitez mon Facebook",
            visitIG: "Visitez mon Instagram",
        },
        zh: {
            home: "主页",
            games: "游戏",
            about: "关于",
            contact: "联系",
            title: "你被困住了",
            description: "观察你的周围环境...",
            projects: "我的游戏 // 项目",
            aboutUs: "关于我们",
            aboutDescription: "打造让人毛骨悚然和心跳加速的恐怖体验。",
            contactMe: "联系我",
            placeholderName: "你的名字",
            placeholderEmail: "你的邮件",
            placeholderMessage: "你的信息",
            submitButton: "提交信息",
            scrollText: "向下滚动",
            latestPosts: "最新帖子",
            postsDescription: "查看我们在Facebook和Instagram上的最新帖子",
            visitFB: "访问我的Facebook",
            visitIG: "访问我的Instagram",
        },
        hu: {
            home: "Főoldal",
            games: "Játékok",
            about: "Rólunk",
            contact: "Kapcsolat",
            title: "Csapdába estél",
            description: "Figyeld meg a környezeted...",
            projects: "Játékaim // Projektjeim",
            aboutUs: "Rólunk",
            aboutDescription: "Horror élmények készítése, amelyek megborzongatják és felgyorsítják a szívverésed.",
            contactMe: "Lépj kapcsolatba velem",
            placeholderName: "Neved",
            placeholderEmail: "Email címed",
            placeholderMessage: "Üzeneted",
            submitButton: "Üzenet küldése",
            scrollText: "Görgess le",
            latestPosts: "Legújabb bejegyzések",
            postsDescription: "Nézd meg legújabb bejegyzéseinket a Facebookon és az Instagramon",
            visitFB: "Látogasd meg Facebook oldalam",
            visitIG: "Látogasd meg Instagram oldalam",
        }
    };

    const elementsToTranslate = {
        // Header Links
        homeLink: document.querySelector('nav ul li a[href="#home"]'),
        gamesLink: document.querySelector('nav ul li a[href="#games"]'),
        aboutLink: document.querySelector('nav ul li a[href="#about"]'),
        contactLink: document.querySelector('nav ul li a[href="#contact"]'),
        // Hero Section
        title: document.querySelector('.hero h2'),
        description: document.querySelector('.hero p'),
        scrollText: document.querySelector('.scroll-text'),
        // Game Section
        projects: document.querySelector('.games-section h2'),
        // About Section
        aboutUs: document.querySelector('.about-section h2'),
        aboutDescription: document.querySelector('.about-section p'),
        // Posts Section
        latestPosts: document.querySelector('.posts-section h2'),
        postsDescription: document.querySelector('.posts-section p'),
        visitFB: document.querySelector('.btn-fb'),
        visitIG: document.querySelector('.btn-ig'),
        // Contact Section
        contactMe: document.querySelector('.contact-section h2'),
        placeholderName: document.querySelector('input[name="name"]'),
        placeholderEmail: document.querySelector('input[name="email"]'),
        placeholderMessage: document.querySelector('textarea[name="message"]'),
        submitButton: document.querySelector('.contact-section button'),
    };

    // Switch language function
    function switchLanguage(lang) {
        const translation = translations[lang] || translations['en'];

        // Update header links
        elementsToTranslate.homeLink.textContent = translation.home;
        elementsToTranslate.gamesLink.textContent = translation.games;
        elementsToTranslate.aboutLink.textContent = translation.about;
        elementsToTranslate.contactLink.textContent = translation.contact;

        // Update other sections
        elementsToTranslate.title.textContent = translation.title;
        elementsToTranslate.description.textContent = translation.description;
        elementsToTranslate.scrollText.textContent = translation.scrollText;
        elementsToTranslate.projects.textContent = translation.projects;
        elementsToTranslate.aboutUs.textContent = translation.aboutUs;
        elementsToTranslate.aboutDescription.textContent = translation.aboutDescription;
        elementsToTranslate.latestPosts.textContent = translation.latestPosts;
        elementsToTranslate.postsDescription.textContent = translation.postsDescription;
        elementsToTranslate.visitFB.textContent = translation.visitFB;
        elementsToTranslate.visitIG.textContent = translation.visitIG;
        elementsToTranslate.contactMe.textContent = translation.contactMe;
        elementsToTranslate.placeholderName.placeholder = translation.placeholderName;
        elementsToTranslate.placeholderEmail.placeholder = translation.placeholderEmail;
        elementsToTranslate.placeholderMessage.placeholder = translation.placeholderMessage;
        elementsToTranslate.submitButton.textContent = translation.submitButton;
    }

    // Initialize with default language or saved language
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLanguage);

    // Function to handle language change
    function handleLanguageChange(event) {
        const selectedLanguage = event.target.getAttribute('data-lang');
        switchLanguage(selectedLanguage);
        localStorage.setItem('preferredLanguage', selectedLanguage); // Save the language preference
    }

    // Attach event listeners to language dropdown links
    languageLinks.forEach(link => {
        link.addEventListener('click', handleLanguageChange);
    });
});