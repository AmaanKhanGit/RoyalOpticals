const imageViewer = () => {
    const carouselImages = document.querySelectorAll('#carouselExampleIndicators .carousel-item img')
    const thumbnails = document.querySelectorAll('.carousel-indicators img')

    const viewer = document.getElementById('imgViewer')
    const viewerImage = document.getElementById('viewerImage')
    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')
    const closeBtn = document.querySelector('.close-btn')

    let currentIndex = 0

    function openViewer(index) {
        currentIndex = index
        viewerImage.src = carouselImages[index].src
        viewer.style.display = 'flex'
    }

    carouselImages.forEach((img, index) => {
        img.addEventListener('click', () => openViewer(index))
    })

    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % carouselImages.length
        viewerImage.src = carouselImages[currentIndex].src
    }

    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length
        viewerImage.src = carouselImages[currentIndex].src
    }

    closeBtn.onclick = () => viewer.style.display = 'none'
    viewer.onclick = (e) => {
        if (e.target === viewer) viewer.style.display = 'none'
    }

}

export { imageViewer }