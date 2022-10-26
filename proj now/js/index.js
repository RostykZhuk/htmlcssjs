const contentInfo = document.querySelector('.cards-wrapper');
let basket = JSON.parse(localStorage.getItem('data')) || [];
const data = [
  {
    id: 1,
    img: './images/card1.png',
    name: '3d product rendering',
    desc1: '3D models creation based on drawings',
    desc2: ' Creation of 3D models from photos and sketches',
    desc3: 'Processing of scan results',
    desc4: 'Preparing your model for 3D printing',
    price: '$700',
  },
  {
    id: 2,
    img: './images/card2.png',
    name: '3D PACKAGE RENDERING',
    desc1: '3D models creation based on drawings',
    desc2: ' Creation of 3D models from photos and sketches',
    desc3: 'Preparation of banners and images',
    desc4: 'Variable material and color options',
    price: '$600',
  },
  {
    id: 3,
    img: `./images/card3.png`,
    name: `3d PRODUCT ANIMATION`,
    desc1: `3D models creation /n`,
    desc2: ` Creation of the environment and materials `,
    desc3: `Storyboard`,
    desc4: `Sound design`,
    price: `$3000`,
  },
];

window.addEventListener('DOMContentLoaded', (x) => {
  contentInfo.innerHTML = data
    .map((e) => {
      // destructuring data\
      let { name, price, desc1, desc2, desc3, desc4, img } = e;

      return `
              <div class="price-card">
            <img src="${img}" alt="" class="card-img" />
            <h1 class="card-title">"${name}"</h1>
            <ul class="card-items">
              <li class="card-item">${desc1}</li>
              <li class="card-item">
           ${desc2}
              </li>
              <li class="card-item">${desc3}</li>
              <li class="card-item">${desc4}</li>
            </ul>
            <div class="card-price-wrapper">
              <div class="price-score">
                <p class="price-description">from</p>
                <p class="price">${price}</p>
              </div>
              <a class="price-btn" href="/"
                >Contact us <is class="fa-solid fa-arrow-right"></is
              ></a>
            </div>
            </div>
            `;
    })
    .join('');
});
