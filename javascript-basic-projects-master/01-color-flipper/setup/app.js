const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const color4 = () => {
  let picker = randomColor();

  document.body.style.backgroundColor = colors[picker];
  color.innerHTML = colors[picker];
};
const randomColor = () => {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', color4);
