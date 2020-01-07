// import state from './state';
import change from '../assets/img/change.png';

document.querySelector('.swap').style.backgroundImage = `url(${change})`;

const getColorPicker = (canvasItem, ctxItem, obj) => {
  const colorContainer = document.querySelector('.color');
  const colorInput = document.querySelector('input[type="color"]');
  const swapColor = document.querySelector('.swap');
  const currentColor = document.querySelector('.current-circle');
  const prevColor = document.querySelector('.prev-circle');
  currentColor.value = obj.colors.current;
  prevColor.value = obj.colors.prev;

  const changeColor = (predefinedColor = null) => {
    const colorState = obj.colors;
    const tempColor = colorState.current;
    colorState.current = predefinedColor || colorState.prev;

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
  // const colorPickFromCanvas = ({ offsetX, offsetY }) => {
  //   const { current } = obj.colors;

  //   const rgbToHex = (...args) => args.map((ex) => {
  //     const hex = ex.toString(16);
  //     return hex.length === 1 ? `0${hex}` : hex;
  //   }).join('');

  //   if (current) {
  //     const rgba = ctxItem.getImageData(offsetX, offsetY, 1, 1).data;
  //     changeColor(`#${rgbToHex(...rgba)}`);
  //   }
  // };

  const changeColorInput = ({ target }) => {
    changeColor(target.value);
  };

  colorInput.addEventListener('change', changeColorInput);
  colorContainer.addEventListener('click', colorChangeFromColorBar);
  // canvasItem.addEventListener('click', colorPickFromCanvas);
};

export default getColorPicker;
