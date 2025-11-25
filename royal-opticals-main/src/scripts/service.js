import "../styles/common.css"
import "../styles/service.css";
import { initMenu } from "./menuToggle";
import { renderHeader } from "./Components/header";
import { renderFooter } from "./Components/footer";

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

    /*
      Active nav highlighting for Services page
      This block marks the current page's nav link with `.active` and adds
      `aria-current="page"` for accessibility.

      To reuse on other pages (about, products) copy this snippet into their
      respective JS entry files (e.g., `src/scripts/about.js`) --- keep the
      selector `header nav a` so it targets the header markup produced by
      `renderHeader()`.
    */
    (function markActiveNavForServices() {
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
})