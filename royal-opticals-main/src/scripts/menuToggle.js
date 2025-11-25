export function initMenu() {
    const menuBar = document.querySelector('.menuBar');
    const navMobile = document.querySelector('.nav-mobile');
    const closeBtn = document.querySelector('.closeBtn');
    const navLinks = document.querySelectorAll('.nav-links');
    const overlay = document.querySelector('.overlay');

    // Defensive checks: if essential elements are missing, don't attempt to attach listeners
    if (!menuBar || !navMobile || !closeBtn || !overlay) {
        return;
    }

    const toggleMobileMenu = () => {
        navMobile.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    window.addEventListener('resize', () => {
        if (navMobile && window.innerWidth > 780) {
            navMobile.classList.remove('active');
        }
    });

    menuBar.addEventListener('click', toggleMobileMenu);
    closeBtn.addEventListener('click', toggleMobileMenu);
    if (navLinks && navLinks.length) {
        navLinks.forEach(link => {
            link.addEventListener('click', toggleMobileMenu);
        });
    }
    overlay.addEventListener('click', toggleMobileMenu);
}
