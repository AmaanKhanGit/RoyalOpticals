import '../styles/common.css'
import '../styles/singleProduct.css'
import { renderHeader } from "./Components/header.js";
import { renderFooter } from "./Components/footer.js";
import { initMenu } from "./Functions/menuToggle.js";
import { markActiveNav } from "./Functions/activeNav.js";
import { imageViewer } from './Functions/imageViewer.js';
import { productData } from './data/product-data.js'
import { renderSingleProduct } from './Functions/renderSingleProduct.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("header").innerHTML = renderHeader();
    document.querySelector("footer").innerHTML = renderFooter();
    initMenu();
    markActiveNav();
    console.log(productData)
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id);
    renderSingleProduct(productData, id)
    imageViewer();
})