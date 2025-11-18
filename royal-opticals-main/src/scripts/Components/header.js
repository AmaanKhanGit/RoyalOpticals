export function renderHeader() {
    return `
        <div>
            <h1 class="logo">Royal Opticals</h1>
        </div>
        <nav class="nav-cont">
            <ul class="navigation">
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
            </ul>
            <img class="menuBar" src="/Icons/menu.svg" alt="">
            <ul class="navigation nav-mobile">
                <button class="btn closeBtn">Close</button>
                <li><a class="nav-links" href="index.html">Home</a></li>
                <li><a class="nav-links" href="products.html">Products</a></li>
                <li><a class="nav-links" href="services.html">Services</a></li>
                <li><a class="nav-links" href="about.html">About Us</a></li>
                <li><a class="nav-links" href="contact-us.html">Contact Us</a></li>
            </ul>
        </nav>
        <div class="overlay"></div>
    `;
}
