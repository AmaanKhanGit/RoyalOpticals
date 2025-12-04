import "../styles/common.css"
import "../styles/product.css";
import { initMenu } from './menuToggle.js';
import { renderHeader } from './Components/header.js';
import { renderFooter } from './Components/footer.js';
import { renderProducts } from "./renderProducts.js";

document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.querySelector('header');
    const footerContainer = document.querySelector('footer');
    headerContainer.innerHTML = renderHeader();
    footerContainer.innerHTML = renderFooter();
    initMenu();
    renderProducts();
    //? Active nav highlighting for Services page

    (function markActiveNavForProduct() {
        try {
            const pathParts = window.location.pathname.split('/').filter(Boolean);
            const currentFile = (pathParts.length ? pathParts.pop() : 'index.html');
            const headerAnchors = document.querySelectorAll('header nav a');
            headerAnchors.forEach((a) => {
                const href = a.getAttribute('href') || '';
                const hrefParts = href.split('/').filter(Boolean);
                const hrefFile = (hrefParts.length ? hrefParts.pop() : 'index.html');
                if (hrefFile === currentFile || (hrefFile === '' && currentFile === 'index.html')) {
                    a.classList.add('active');
                    a.setAttribute('aria-current', 'page');
                } else {
                    a.classList.remove('active');
                    a.removeAttribute('aria-current');
                }
            });
        } catch (e) {
            console.warn('Failed to mark active nav links (services)', e);
        }
    })();

    //? Lazy loading images with Intersection Observer
    const lazyImages = document.querySelectorAll('.lazy-img');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add("lazy-loaded");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));
});