document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeMenu = document.getElementById('close-menu');
    const fullscreenNavLinks = document.querySelectorAll('.fullscreen-nav-link');
    const desktopNavLinks = document.querySelectorAll('nav ul li a');
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    const setActiveLink = () => {
        const currentPath = window.location.pathname.split('/').pop();
        const currentHash = window.location.hash || '#home';
        
        fullscreenNavLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === currentPath || (currentPath === 'index.html' && linkPath === currentHash)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        desktopNavLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === currentPath || (currentPath === 'index.html' && linkPath === currentHash)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    setActiveLink();

    window.addEventListener('hashchange', setActiveLink);

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            fullscreenMenu.classList.toggle('active');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            fullscreenMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    }

    fullscreenNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            fullscreenMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            setActiveLink();
        });
    });

    desktopNavLinks.forEach(link => {
        link.addEventListener('click', setActiveLink);
    });

    const setTheme = (isDark) => {
        body.classList.toggle('dark-mode', isDark);
        themeToggle.checked = isDark;
        localStorage.setItem('darkMode', isDark);
    };

    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
        setTheme(savedTheme === 'true');
    } else {
        setTheme(false); 
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            setTheme(themeToggle.checked);
        });
    }

    const loadingOverlay = document.getElementById('loading-overlay');
    
    window.addEventListener('load', () => {
        loadingOverlay.style.display = 'none';
    });
});
