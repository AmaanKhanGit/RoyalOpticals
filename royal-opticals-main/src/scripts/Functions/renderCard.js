const renderCards = (cardData) => {
  const cardGrid = document.querySelector('.card-grid');
  if (!cardGrid) return;
  cardGrid.innerHTML = cardData.map(card => {
    return `  <div class="card animation">
          <div class="card-head">
            <img src="${card.imgSrc}" alt="${card.heading}">
            <h3 class="content-heading">${card.heading}</h3>
          </div>
          <ul class="card-list">
            <li>${card.point1}</li>
            <li>${card.point2}</li>
          </ul>
        </div>`
  }).join('');
}

export { renderCards };