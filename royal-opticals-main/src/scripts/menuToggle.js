export function initMenu() {
    const menuBar = document.querySelector('.menuBar');
    const navMobile = document.querySelector('.nav-mobile');
    const closeBtn = document.querySelector('.closeBtn');
    const navLinks = document.querySelectorAll('.nav-links');
    const overlay = document.querySelector('.overlay');

    const toggleMobileMenu = () => {
        navMobile.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 780) {
            navMobile.classList.remove('active');
        }
    });

    menuBar.addEventListener('click', toggleMobileMenu);
    closeBtn.addEventListener('click', toggleMobileMenu);
    navLinks.forEach(link => {
        link.addEventListener('click', toggleMobileMenu);
    });
    overlay.addEventListener('click', toggleMobileMenu);
}
