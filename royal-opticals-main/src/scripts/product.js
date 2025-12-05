import "../styles/common.css"
import "../styles/product.css";
import { initMenu } from './Functions/menuToggle.js';
import { renderHeader } from './Components/header.js';
import { renderFooter } from './Components/footer.js';
import { markActiveNav } from "./Functions/activeNav.js";
import { handleFilter } from "./Functions/handleFilter.js";
import { renderProducts } from "./Functions/renderProducts.js";

document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.querySelector('header');
    const footerContainer = document.querySelector('footer');
    headerContainer.innerHTML = renderHeader();
    footerContainer.innerHTML = renderFooter();
    initMenu();
    //? Active nav highlighting for Services page
    markActiveNav();
    //? filter handler here brooo
    renderProducts("all");
    handleFilter();
});