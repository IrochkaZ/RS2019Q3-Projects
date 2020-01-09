import state from './state';

const colorByStateOnInit = () => {
  const colorContainer = document.querySelector('.color__change');
  const { current, prev } = state.colors;
  colorContainer.firstElementChild.value = current;
  colorContainer.lastElementChild.value = prev;
};

const updateAll = () => {
  colorByStateOnInit();
};

export default updateAll;
