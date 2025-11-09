import "../styles/common.css"
import "../styles/style.css"
import "../styles/contact.css"
import { initMenu } from "./menuToggle";
import { renderHeader } from "./Components/header.js";
import { renderFooter } from "./Components/footer.js";

document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.querySelector("header");
    const footerContainer = document.querySelector("footer");

    headerContainer.innerHTML = renderHeader();
    footerContainer.innerHTML = renderFooter();
    initMenu();
});
