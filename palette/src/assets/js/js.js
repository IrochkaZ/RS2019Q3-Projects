import { isArray } from 'util';
import state from './state';
import size4x4 from './size4x4';
import getSizes from './getSizes';
import '../main.css';

const drawCanvas = (array, canvasItem, ctxItem) => {
  const scale = canvasItem.width / array.length;
  const context = ctxItem;
  array.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      context.fillStyle = (isArray(col)) ? `rgba(${col[0]}, ${col[1]}, ${col[2]}, ${col[3]})` : `#${col}`;
      context.fillRect(colIndex * scale, rowIndex * scale, scale, scale);
    });
  });
};

const pencilDrawing = (canvasItem, ctxItem) => {
  const context = ctxItem;
  const pencilDraw = ({ offsetX, offsetY, buttons }) => {
    const { pencil } = state.tools;
    const { width, height } = state.blockSize;
    const { current: color } = state.colors;
    if (buttons > 0 && pencil) {
      const stepX = Math.floor(offsetX / width);
      const stepY = Math.floor(offsetY / height);
      context.fillStyle = color;
      state.matrix[stepY][stepX] = color.slice(1, color.length).toUpperCase();
      context.fillRect(stepX * width, stepY * height, stepX + width, stepY + height);
    }
  };
  canvasItem.addEventListener('mousemove', pencilDraw);
};

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

  const colorChangeFromColorBar = ({ target }) => {
    const eventChangeColor = target;
    if (eventChangeColor.classList.contains('color__current') || eventChangeColor.classList.contains('color__prev')) {
      changeColor();
    }

    if (eventChangeColor.closest('.predefined__red') || eventChangeColor.closest('.predefined__blue')) {
      global.console.log(eventChangeColor);
      changeColor(eventChangeColor.getAttribute('data-color'));
    }
  };

  const colorPickFromCanvas = ({ offsetX, offsetY }) => {
    const { picker } = state.tools;

    const rgbToHex = (r, g, b) => [r, g, b].map((ex) => {
      const hex = ex.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    }).join('');

    if (picker) {
      const rgba = ctxItem.getImageData(offsetX, offsetY, 1, 1).data;
      changeColor(`#${rgbToHex(...rgba)}`);
    }
  };

  const changeColorInput = ({ target: { value } }) => {
    changeColor(value);
  };

  colorInput.addEventListener('change', changeColorInput);

  colorContainer.addEventListener('click', colorChangeFromColorBar);
  canvasItem.addEventListener('click', colorPickFromCanvas);
};

const chooseToolBar = ({ tools }) => {
  const buttons = document.querySelector('.tools__color');
  global.console.log(buttons.children);

  const toolChoose = ({ target }) => {
    const toolbar = tools;


    [].forEach.call(buttons.children, (button) => {
      global.console.log(buttons.children);
      button.classList.remove('active');
    });

    if (target.getAttribute('data-tool') === 'pencil') {
      toolbar.pencil = true;
      toolbar.bucket = false;
      toolbar.picker = false;
      target.classList.add('active');
    }

    if (target.getAttribute('data-tool') === 'bucket') {
      toolbar.pencil = false;
      toolbar.bucket = true;
      toolbar.picker = false;
      target.classList.add('active');
    }

    if (target.getAttribute('data-tool') === 'picker') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.picker = true;
      target.classList.add('active');
    }
  };

  buttons.addEventListener('click', toolChoose);
};

const colorFill = (ctxItem, canvasItem, { tools, canvasSize, colors }) => {
  const fillRect = () => {
    const { bucket } = tools;
    if (bucket) {
      const context = ctxItem;
      const { width, height } = canvasSize;
      const { current: currentColor } = colors;
      context.fillStyle = currentColor;
      context.fillRect(0, 0, width, height);
    }
  };

  canvasItem.addEventListener('click', fillRect);
};

const LocalStorageData = (canvasItem, ctxItem) => {
  if (localStorage.getItem('matrix')) {
    const matrix = JSON.parse(localStorage.getItem('matrix'));
    state.matrix = matrix;
    drawCanvas(matrix, canvasItem, ctxItem);
  } else {
    drawCanvas(size4x4, canvasItem, ctxItem);
  }

  const saveData = () => {
    const { matrix } = state;
    localStorage.setItem('matrix', JSON.stringify(matrix));
  };

  window.addEventListener('unload', saveData);
};

const hotKeys = ({ tools }) => {
  const buttons = document.querySelector('.tools__color');

  const toolKeyPress = ({ code }) => {
    const toolbar = tools;

    [].forEach.call(buttons.children, (button) => {
      button.classList.remove('active');
    });
    if (code === 'KeyB') {
      toolbar.pencil = false;
      toolbar.bucket = true;
      toolbar.picker = false;
      document.querySelector('li[data-tool="bucket"]').classList.add('active');
    }

    if (code === 'KeyP') {
      toolbar.pencil = true;
      toolbar.bucket = false;
      toolbar.picker = false;
      document.querySelector('li[data-tool="pencil"]').classList.add('active');
    }

    if (code === 'KeyC') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.picker = true;
      document.querySelector('li[data-tool="picker"]').classList.add('active');
    }
  };
  window.addEventListener('keydown', toolKeyPress);
};

const init = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  getSizes(canvas, size4x4, state);
  LocalStorageData(canvas, ctx);
  pencilDrawing(canvas, ctx);
  getColorPicker(canvas, ctx, state);
  chooseToolBar(state);
  colorFill(ctx, canvas, state);
  hotKeys(state);
};

init();
