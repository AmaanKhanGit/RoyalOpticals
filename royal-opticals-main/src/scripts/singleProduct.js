import '../styles/common.css'
import '../styles/singleProduct.css'
import { renderHeader } from "./Components/header.js";
import { renderFooter } from "./Components/footer.js";
import { initMenu } from "./Functions/menuToggle.js";
import { markActiveNav } from "./Functions/activeNav.js";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("header").innerHTML = renderHeader();
    document.querySelector("footer").innerHTML = renderFooter();
    initMenu();
    markActiveNav();
    
})