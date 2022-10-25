document.getElementById('outer3').addEventListener('click', toggleState3);

function toggleState3() {
  let galleryView = document.getElementById('galleryView');

  let outer = document.getElementById('outer3');

  let tilesContainer = document.getElementById('tilesContainer');
  if (outer.classList.contains('active')) {
    galleryView.style.display = 'flex';
    tilesView.style.display = 'none';

    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild);
    }
  }
  for (let i = 0; i < imgObject.length - 1; i++) {
    let tileItem = document.createElement('div');
    tileItem.classList.add('tileItem');
    tileItem.style.background = 'url(' + imgObject[i] + ')';
    tileItem.style.backgroundSize = 'contain';
    tilesContainer.appendChild(tileItem);
  }
}

let imgObject = [
  './../images/productrendering.png',
  './../images/2.png',
  './../images/3.png',
  './../images/4.png',
  './../images/5.png',
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {
  let mainView = document.getElementById('mainView');
  mainView.style.background = 'url(' + imgObject[mainImg] + ')';

  let leftView = document.getElementById('leftView');
  leftView.style.background = 'url(' + imgObject[prevImg] + ')';

  let rightView = document.getElementById('rightView');
  rightView.style.background = 'url(' + imgObject[nextImg] + ')';

  let linkTag = document.getElementById('linkTag');
  linkTag.href = imgObject[mainImg];
}

function scrollRight() {
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= imgObject.length - 1) {
    nextImg = 0;
  } else {
    nextImg++;
  }
  loadGallery();
}

function scrollLeft() {
  nextImg = mainImg;
  mainImg = prevImg;

  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  }
  loadGallery();
}

document.getElementById('navRight').addEventListener('click', scrollRight);
document.getElementById('navLeft').addEventListener('click', scrollLeft);
document.getElementById('rightView').addEventListener('click', scrollRight);
document.getElementById('leftView').addEventListener('click', scrollLeft);
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 37) {
    scrollLeft();
  } else if (e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();
