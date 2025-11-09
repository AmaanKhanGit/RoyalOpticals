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
})