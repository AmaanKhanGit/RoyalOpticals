import { initMenu } from "./menuToggle";
import { renderHeader } from "./Components/header";
import { brandsData } from "./data/brands-data";
import { renderBrands } from "./renderBrands";
document.addEventListener("DOMContentLoaded", () => {
    //initialize menu toggle
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = renderHeader();
    }
    initMenu();
    renderBrands(brandsData);
})