document.getElementById('outer1').addEventListener('click', toggleState3);

function toggleState3() {
  let galleryView1 = document.getElementById('galleryView1');

  let outer1 = document.getElementById('outer1');

  let tilesContainer1 = document.getElementById('tilesContainer1');
  if (outer1.classList.contains('active')) {
    galleryView1.style.display = 'flex';
    tilesView1.style.display = 'none';

    while (tilesContainer1.hasChildNodes()) {
      tilesContainer1.removeChild(tilesContainer1.firstChild);
    }
  }
  for (let i = 0; i < im.length - 1; i++) {
    let tileItem1 = document.createElement('div');
    tileItem1.classList.add('tileItem1');
    tileItem1.style.background = 'url(' + im[i] + ')';
    tileItem1.style.backgroundSize = 'contain';
    tilesContainer1.appendChild(tileItem1);
  }
}

let im = [
  './../images/3DPACKAGE2.png',
  './../images/3DPACKAGE1.png',
  './../images/3DPACKAGE3.png',
  './../images/3DPACKAGE4.png',
];

let main1 = 0;
let prev1 = im.length - 1;
let next1 = 1;

function loadGallery1() {
  let mainView = document.getElementById('mainView1');
  mainView.style.background = 'url(' + im[main1] + ')';

  let leftView = document.getElementById('leftView1');
  leftView.style.background = 'url(' + im[prev1] + ')';

  let rightView = document.getElementById('rightView1');
  rightView.style.background = 'url(' + im[next1] + ')';

  let linkTag = document.getElementById('linkTag1');
  linkTag.href = im[main1];
}

function scrollRight1() {
  prev1 = main1;
  main1 = next1;
  if (next1 >= im.length - 1) {
    next1 = 0;
  } else {
    next1++;
  }
  loadGallery1();
}

function scrollLeft1() {
  next1 = main1;
  main1 = prev1;

  if (prev1 === 0) {
    prev1 = im.length - 1;
  } else {
    prev1--;
  }
  loadGallery1();
}

document.getElementById('navRight1').addEventListener('click', scrollRight1);
document.getElementById('navLeft1').addEventListener('click', scrollLeft1);
document.getElementById('rightView1').addEventListener('click', scrollRight1);
document.getElementById('leftView1').addEventListener('click', scrollLeft1);
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 37) {
    scrollLeft1();
  } else if (e.keyCode === 39) {
    scrollRight1();
  }
});

loadGallery1();
