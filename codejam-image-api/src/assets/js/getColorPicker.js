import state from './state';

const getColorPicker = (canvasItem, ctxItem, obj) => {
  const colorContainer = document.querySelector('.color');
  const colorInput = document.querySelector('input[type="color"]');


  const changeColor = (predefinedColor = null) => {
    const colorState = obj.colors;
    const currentColor = document.querySelector('.color__current > .current-circle');
    const prevColor = document.querySelector('.color__prev > .prev-circle');
    const tempColor = colorState.current;
    if (predefinedColor) {
      colorState.current = predefinedColor;
      colorState.prev = tempColor;
    } else {
      colorState.current = colorState.prev;
      colorState.prev = tempColor;
    }
    currentColor.style.background = colorState.current;
    prevColor.style.background = colorState.prev;
  };

  const colorChangeFromColorBar = (event) => {
    const eventChangeColor = event.target;
    if (eventChangeColor.classList.contains('color__current') || eventChangeColor.classList.contains('color__prev')) {
      changeColor();
    }

    if (eventChangeColor.classList.contains('predefined__red') || eventChangeColor.classList.contains('predefined__blue')) {
      changeColor(eventChangeColor.getAttribute('data-color'));
    }
  };

  const colorPickFromCanvas = (e) => {
    const { picker } = state.tools;
    const x = e.offsetX;
    const y = e.offsetY;

    const rgbToHex = (r, g, b) => [r, g, b].map((ex) => {
      const hex = ex.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    }).join('');

    if (picker) {
      const rgba = ctxItem.getImageData(x, y, 1, 1).data;
      changeColor(`#${rgbToHex(...rgba)}`);
    }
  };

  const changeColorInput = (event) => {
    changeColor(event.target.value);
  };

  colorInput.addEventListener('change', changeColorInput);

  colorContainer.addEventListener('click', colorChangeFromColorBar, true);
  canvasItem.addEventListener('click', colorPickFromCanvas);
};

export default getColorPicker;
