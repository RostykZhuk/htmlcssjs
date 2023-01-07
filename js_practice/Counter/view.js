function createView({
  onIncrementButtonClick,
  onDecrementButtonClick,
  onResetButtonClick,
}) {
  const counterNode = document.querySelector('.js-counter');
  const incrementBtnNode = document.querySelector('.js-increment-btn');
  const decrementBtnNode = document.querySelector('.js-decrement-btn');
  const resetBtnNode = document.querySelector('.js-reset-btn');

  incrementBtnNode.addEventListener('click', onIncrementButtonClick);
  decrementBtnNode.addEventListener('click', onDecrementButtonClick);
  resetBtnNode.addEventListener('click', onResetButtonClick);

  return {
    render({ counter }) {
      counterNode.innerHTML = counter;
    },
  };
}
