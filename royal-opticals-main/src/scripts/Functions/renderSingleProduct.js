const renderSingleProduct = (productData, id) => {
    const filteredData = productData.find(data => data.id == id)

    console.log(filteredData.img1)

    document.querySelector("#productContainer").innerHTML =
        `
       <section class="left">
            <div id="carouselExampleIndicators" class="carousel slide">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${filteredData.img1}" class="d-block w-100" alt="${filteredData.img1}">
                    </div>
                    <div class="carousel-item">
                        <img src="${filteredData.img2}" class="d-block w-100" alt="${filteredData.img2}">
                    </div>
                    <div class="carousel-item">
                        <img src="${filteredData.img3}" class="d-block w-100" alt="${filteredData.img3}">
                    </div>
                </div>

                <div class="carousel-indicators">
                    <img src="${filteredData.img1}" data-bs-target="
                        #carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true"
                        aria-label="Slide 1">
                    <img type="button" src="${filteredData.img2}"
                        data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                    <img type="button" src="${filteredData.img3}"
                        data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                </div>
            </div>
        </section>
        <section class="right">

            <!-- Product Title -->
            <h2 id="product-title">${filteredData.title}</h2>

            <!-- Short Description -->
            <p id="product-desc" class="short-desc">${filteredData.desc}</p>

            <!-- Price Section -->
            <div class="price-box">
                <span id="product-price" class="price">₹${filteredData.price}</span>
            </div>

            <hr>

            <!-- Specs Table -->
            <h3 class="spec-heading">Product Specifications</h3>

            <table class="spec-table" id="product-specs">
                <tr>
                    <th>Brand</th>
                    <td>${filteredData.brand}</td>
                </tr>
               
                <tr>
                    <th>Frame Shape</th>
                    <td>${filteredData.shape}</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>${filteredData.material}</td>
                </tr>
                <tr>
                    <th>Category</th>
                    <td>${filteredData.category}</td>
                </tr>
            </table>

            <!-- Buttons -->
            <div class="btn-box">
                <a href="contact-us.html" class="btn ">Visit shop for more </a>
            </div>
        </section>
    `
}

export { renderSingleProduct }