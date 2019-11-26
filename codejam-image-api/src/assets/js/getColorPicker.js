import state from './state';

const getColorPicker = (canvasItem, ctxItem, obj) => {
  const colorContainer = document.querySelector('.color');
  const colorInput = document.querySelector('input[type="color"]');


  const changeColor = (predefinedColor = null) => {
    const colorState = obj.colors;
    const currentColor = document.querySelector('.color__current > .current-circle');
    const prevColor = document.querySelector('.color__prev > .prev-circle');
    const tempColor = colorState.current;
    colorState.current = predefinedColor || colorState.prev;

    colorState.prev = tempColor;
    currentColor.style.background = colorState.current;
    prevColor.style.background = colorState.prev;
  };

  const colorChangeFromColorBar = ({ target }) => {
    if (target.classList.contains('color__current') || target.classList.contains('color__prev')) {
      changeColor();
    }

    if (target.classList.contains('predefined__red') || target.classList.contains('predefined__blue')) {
      changeColor(target.getAttribute('data-color'));
    }
  };

  const colorPickFromCanvas = ({ offsetX, offsetY }) => {
    const { picker } = state.tools;

    const rgbToHex = (...args) => args.map((ex) => {
      const hex = ex.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    }).join('');

    if (picker) {
      const rgba = ctxItem.getImageData(offsetX, offsetY, 1, 1).data;
      changeColor(`#${rgbToHex(...rgba)}`);
    }
  };

  const changeColorInput = ({ target }) => {
    changeColor(target.value);
  };

  colorInput.addEventListener('change', changeColorInput);

  colorContainer.addEventListener('click', colorChangeFromColorBar, true);
  canvasItem.addEventListener('click', colorPickFromCanvas);
};

export default getColorPicker;
