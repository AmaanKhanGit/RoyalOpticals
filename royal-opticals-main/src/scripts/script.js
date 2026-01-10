import "../styles/common.css"
import "../styles/style.css";
import { initMenu } from "./Functions/menuToggle";
import { renderHeader } from "./Components/header";
import { brandsData } from "./data/brands-data";
import { renderBrands } from "./Functions/renderBrands";
import { cardData } from "./data/WCU-data";
import { renderCards } from "./Functions/renderCard";
import { renderFooter } from "./Components/footer";
import { markActiveNav } from "./Functions/activeNav";

document.addEventListener("DOMContentLoaded", () => {
    //initialize menu toggle
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = renderHeader();
    }
    initMenu();
    markActiveNav();
    renderBrands(brandsData);
    renderCards(cardData);
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = renderFooter();
    }
});