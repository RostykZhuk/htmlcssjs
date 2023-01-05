// Ui and wrapping
const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const selectoperationNode = document.querySelector('.js-select-operation');
const btnResultNode = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');

btnResultNode.addEventListener('click', () => {
  const a = Number(inputANode.value);
  const b = Number(inputBNode.value);

  const operation = selectoperationNode.value;

  const result = calculate({ a, b, operation });
  outputNode.innerText = result;
});
