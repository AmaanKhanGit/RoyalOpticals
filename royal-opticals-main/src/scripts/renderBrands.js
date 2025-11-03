const renderBrands = (brands) => {
    const brandContainer = document.querySelector('.top-brands-grid');
    if (!brandContainer) return;
    brandContainer.innerHTML = brands.map(brand => `
        <div class="img-container animation">
            <img src="${brand.imageUrl}" alt="${brand.name}">
        </div>
    `).join('');
};

export { renderBrands };