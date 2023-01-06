const valueInputNode = document.querySelector('.js-value-input');
const currencySelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

function getInput() {
  return {
    grn: Number(valueInputNode.value),
    currency: currencySelectorNode.value,
  };
}

function render(result) {
  outputNode.innerText = result;
}

valueInputNode.addEventListener('input', () => {
  const result = convert(getInput());
  render(result);
});

currencySelectorNode.addEventListener('change', () => {
  const result = convert(getInput());
  render(result);
});
