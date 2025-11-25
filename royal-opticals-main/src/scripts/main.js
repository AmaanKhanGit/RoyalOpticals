import "../styles/common.css"
import "../styles/style.css";
import { initMenu } from "./menuToggle";
import { renderHeader } from "./Components/header";
import { brandsData } from "./data/brands-data";
import { renderBrands } from "./renderBrands";
import { cardData } from "./data/WCU-data";
import { renderCards } from "./renderCard";
import { renderFooter } from "./Components/footer";

document.addEventListener("DOMContentLoaded", () => {
    //initialize menu toggle
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = renderHeader();
    }
    initMenu();
    renderBrands(brandsData);
    renderCards(cardData);
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = renderFooter();
    }
    // EmailJS integration: send review via EmailJS using a single `message` textarea.
    // Ensure EmailJS CDN is included in `index.html`. Replace service/template/publicKey as needed.
    try {
        if (window && window.emailjs && typeof window.emailjs.init === 'function') {
            // Init with public key (update this key to your EmailJS public key)
            window.emailjs.init('mJdXFE3mLlpVB2qzi');
        }
    } catch (e) {
        // emailjs not available — silently continue
    }

    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (ev) => {
            ev.preventDefault();
            const textarea = reviewForm.querySelector('textarea[name="message"]');
            const message = textarea ? textarea.value.trim() : '';
            if (!message) {
                alert('Please enter your review before submitting.');
                return;
            }

            // Send via EmailJS — update service ID and template ID if your account uses different names
            const serviceID = 'service_royal';
            const templateID = 'template_royal';
            const templateParams = { message };

            if (window && window.emailjs && typeof window.emailjs.send === 'function') {
                window.emailjs.send(serviceID, templateID, templateParams)
                    .then(() => {
                        alert('Thank you! Your review has been sent.');
                        if (textarea) textarea.value = '';
                    })
                    .catch((err) => {
                        console.error('EmailJS error:', err);
                        alert('Sorry — there was an error sending your review. Please try again later.');
                    });
            } else {
                alert('Email service is not available right now.');
            }
        });
    }

    // --- Active nav link highlighting ---
    // Add `active` class to header navigation links whose href matches the current page filename.
    (function markActiveNav() {
        try {
            // derive current filename (use index.html when path root)
            const pathParts = window.location.pathname.split('/').filter(Boolean);
            const currentFile = (pathParts.length ? pathParts.pop() : 'index.html');

            // select anchors inside header nav
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
            // don't break if something unexpected happens
            // eslint-disable-next-line no-console
            console.warn('Failed to mark active nav links', e);
        }
    })();

})