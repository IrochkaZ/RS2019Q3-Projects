import change from '../assets/img/change.png';
import state from './state';

document.querySelector('.swap').style.backgroundImage = `url(${change})`;

const getColorPicker = () => {
  const colorContainer = document.querySelector('.color');
  const colorInputCurrent = document.querySelector('.current-circle');
  const swapColor = document.querySelector('.swap');
  const currentColor = document.querySelector('.current-circle');
  const prevColor = document.querySelector('.prev-circle');
  currentColor.value = state.colors.current;
  prevColor.value = state.colors.prev;

  const changeColor = (predefinedColor = null) => {
    const colorState = state.colors;
    const tempColor = colorState.current;
    state.colors.current = predefinedColor || colorState.prev;
    colorState.prev = tempColor;
    currentColor.style.value = colorState.current;
    prevColor.style.value = colorState.prev;
  };
  const colorChangeFromColorBar = ({ target }) => {
    if (target.classList.contains('current-circle') || target.classList.contains('prev-circle')) {
      changeColor();
    }
  };

  swapColor.addEventListener('click', () => {
    const divColor = currentColor.value;
    currentColor.value = prevColor.value;
    prevColor.value = divColor;
    changeColor();
  });

  const changeColorInput = ({ target }) => {
    changeColor(target.value);
  };

  colorInputCurrent.addEventListener('change', changeColorInput);
  colorContainer.addEventListener('click', colorChangeFromColorBar);
};

export default getColorPicker;
