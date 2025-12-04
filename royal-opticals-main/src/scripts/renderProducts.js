import { productData } from "./data/product-data"

const renderProducts = () => {
    const productGrid = document.querySelector(".product-grid")
    if (!productGrid) { return }
    productGrid.innerHTML = productData.map(
        data => {
            return `
             <div class="product-card animation">
                <div class="product-img">
                    <img src="${data.img1}" alt="${data.title}">
                </div>
                <div class="product-content">
                    <h2 class="product-title">${data.title}</h2>
                    <p class="product-brand">${data.brand}</p>
                    <p class="product-price">₹${data.price}</p>
                    <a class="view-btn">View Details</a>
                </div>
            </div>
            `
        }
    ).join('')
}

export { renderProducts }