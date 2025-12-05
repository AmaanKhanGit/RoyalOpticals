import "../styles/common.css"
import "../styles/product.css";
import { initMenu } from './Functions/menuToggle.js';
import { renderHeader } from './Components/header.js';
import { renderFooter } from './Components/footer.js';
import { renderProducts } from "./Functions/renderProducts.js";
import { markActiveNav } from "./Functions/activeNav.js";
import { lazyImage } from "./Functions/lazyImage.js"

document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.querySelector('header');
    const footerContainer = document.querySelector('footer');
    headerContainer.innerHTML = renderHeader();
    footerContainer.innerHTML = renderFooter();
    initMenu();
    renderProducts();
    //? Active nav highlighting for Services page
    markActiveNav();
    //? Lazy loading images with Intersection Observer
    lazyImage();

});