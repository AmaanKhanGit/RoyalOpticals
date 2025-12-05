import "../styles/common.css"
import "../styles/service.css";
import { initMenu } from "./Functions/menuToggle";
import { renderHeader } from "./Components/header";
import { renderFooter } from "./Components/footer";
import { markActiveNav } from "./Functions/activeNav";

document.addEventListener("DOMContentLoaded", () => {
    //initialize menu toggle
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = renderHeader();
    }
    initMenu();
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = renderFooter();
    }

    //? Active nav highlighting for Services page
    markActiveNav();


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

})