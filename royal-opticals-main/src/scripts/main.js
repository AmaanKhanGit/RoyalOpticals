import { initMenu } from "./menuToggle";
import { renderHeader } from "./Components/header";
import { brandsData } from "./data/brands-data";
import { renderBrands } from "./renderBrands";
import { cardData } from "./data/WCU-data";
import { renderCards } from "./renderCard";
import "../styles/style.css";
document.addEventListener("DOMContentLoaded", () => {
    //initialize menu toggle
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = renderHeader();
    }
    initMenu();
    renderBrands(brandsData);
    renderCards(cardData);
})