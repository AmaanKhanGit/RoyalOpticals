export function renderHeader() {
    return `
        <div>
            <h1 class="logo">Royal Opticals</h1>
        </div>
        <nav class="nav-cont">
            <ul class="navigation">
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            <img class="menuBar" src="/card-heads/menu.svg" alt="">
            <ul class="navigation nav-mobile">
                <button class="btn closeBtn">Close</button>
                <li><a class="nav-links" href="">Home</a></li>
                <li><a class="nav-links" href="">Products</a></li>
                <li><a class="nav-links" href="">About Us</a></li>
                <li><a class="nav-links" href="">Contact Us</a></li>
            </ul>
        </nav>
        <div class="overlay"></div>
    `;
}
