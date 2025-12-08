import { productData } from "../data/product-data"
import { lazyImage } from "./lazyImage";
const renderProducts = (filter) => {
    const productGrid = document.querySelector(".product-grid")
    productGrid.innerHTML = "";

    const filteredProducts = filter === "all" ? productData : productData.filter(item => item.category.toLocaleLowerCase() == filter.toLowerCase());

    if (!productGrid) {
        productGrid.innerHTML = "<p>No products found</p>"
    }
    productGrid.innerHTML = filteredProducts.map(
        data => {
            console.log(data.img1)
            return `
             <div id="${data.id}" class="product-card animation">
                <div class="product-img">
                    <img class="lazy-img" data-src="${data.img1}" alt="${data.title}">
                </div>
                <div class="product-content" data-category="${data.category}">
                    <h2 class="product-title">${data.title}</h2>
                    <p class="product-brand">${data.brand}</p>
                    <a class="view-btn">View Details</a>
                </div>
            </div>
            `
        }
    ).join('');
    lazyImage();
}

//& PRICE IN CARD <p class="product-price"> ₹${data.price}</p>

export { renderProducts }