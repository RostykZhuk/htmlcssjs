const CURRENT_YEAR = 2023;
const CORRECT_ANSWER = 'True';
const ERROR_ANSWER = 'False';

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', () => {
  const inputValue = inputNode.value;

  if (!inputValue) {
    return;
  }

  const answer = Number(inputNode.value);

  let output = CORRECT_ANSWER;

  if (answer !== CURRENT_YEAR) {
    output = ERROR_ANSWER;
  }
  outputNode.innerHTML = output;
});
