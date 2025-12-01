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
            <i class="bi bi-list menuBar" id="menuBar"></i>
            <ul class="navigation nav-mobile">
                <div class="mobile-header">
                    <h1 class="logo">Royal Opticals</h1>
                    <i class="bi bi-x-lg closeBtn" id="closeBtn"></i>
                </div>
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
