import "../styles/common.css"
import "../styles/FAQ.css";
import { initMenu } from './Functions/menuToggle.js';
import { renderHeader } from './Components/header.js';
import { renderFooter } from './Components/footer.js';

document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.querySelector('header');
    const footerContainer = document.querySelector('footer');
    headerContainer.innerHTML = renderHeader();
    footerContainer.innerHTML = renderFooter();
    initMenu();
});