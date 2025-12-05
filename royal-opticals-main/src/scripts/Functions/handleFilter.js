import { renderProducts } from "./renderProducts";

const handleFilter = () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(btn => {
                btn.classList.remove("active")
            })
            btn.classList.add("active");
            const filterValue = e.target.value;
            console.log(filterValue)
            renderProducts(filterValue)
            window.scrollTo({
                top: document.querySelector('.product-grid'),
                behavior: 'smooth'
            });
        })
    })
}

export { handleFilter }