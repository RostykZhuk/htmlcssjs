const contentInfo = document.querySelector('.cards-wrapper');
const contentInfo2 = document.querySelector('.personal-wrapper');
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
    padding: '21px',
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
    padding: '26px',
  },
];

const personal = [
  {
    id: 1,
    img: './images/сотрудник1.png',
    name: 'Cyril Genba',
    priority: 'CMO',
  },
  {
    id: 2,
    img: './images/сотрудник2.png',
    name: 'Yulia Volynskova',
    priority: 'CPO',
  },
  {
    id: 3,
    img: './images/сотрудник3.png',
    name: 'Max Volynsckova',
    priority: 'CEO',
    margin: '15px',
  },
  {
    id: 4,
    img: './images/сотрудник3.png',
    name: ' Apas Yancauscas',
    priority: 'Chief 3D designer',
    margin: '15px',
  },
];

window.addEventListener('DOMContentLoaded', (x) => {
  contentInfo2.innerHTML = personal
    .map((e) => {
      // destructuring data\
      let { name, img, priority, margin } = e;

      return `
              <div class="person">
              <div class="person-img" style = "margin-top:${margin};">
                <img src="${img}" alt="person" />
              </div>
              <div class="personal-name">
                <p>${name}</p>
                <p class="personal-priority">${priority}</p>
              </div>
            </div>
            `;
    })
    .join('');
});

window.addEventListener('DOMContentLoaded', (x) => {
  contentInfo.innerHTML = data
    .map((e) => {
      // destructuring data\
      let { name, price, desc1, desc2, desc3, desc4, img, padding } = e;

      return `
              <div class="price-card">
            <img src="${img}" alt="" class="card-img" />
            <h1 class="card-title">"${name}"</h1>
            <ul class="card-items">
              <li class="card-item" style = "padding:${padding};">${desc1}</li>
              <li class="card-item" style = "padding:${padding};">
           ${desc2}
              </li>
              <li class="card-item" style = "padding:${padding};">${desc3}</li>
              <li class="card-item" style = "padding:${padding};">${desc4}</li>
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
