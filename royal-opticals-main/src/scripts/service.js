import "../styles/common.css"
import "../styles/service.css";
import { initMenu } from "./Functions/menuToggle";
import { renderHeader } from "./Components/header";
import { renderFooter } from "./Components/footer";
import { markActiveNav } from "./Functions/activeNav";
import { lazyImage } from "./Functions/lazyImage";

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

    //& Active nav highlighting 
    markActiveNav();

    //& Lazy loading images 
    lazyImage();
})