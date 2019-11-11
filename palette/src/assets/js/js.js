import { isArray } from 'util';
import state from './state';
import size4x4 from './size4x4';
import '../main.css';

const getSizes = (cloth, array, obj) => {
  const states = obj;
  states.canvasSize.width = cloth.width;
  states.canvasSize.height = cloth.height;
  states.blockSize.width = cloth.width / array.length;
  states.blockSize.height = cloth.height / array[0].length;
};

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
  const pencilDraw = (e) => {
    const { pencil } = state.tools;
    const { width, height } = state.blockSize;
    const { current: color } = state.colors;
    const x = e.offsetX;
    const y = e.offsetY;

    if (e.buttons > 0 && pencil) {
      const stepX = Math.floor(x / width);
      const stepY = Math.floor(y / height);
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

  const colorChangeFromColorBar = (event) => {
    const eventChangeColor = event.target;
    if (eventChangeColor.closest('.color__current') || eventChangeColor.closest('.color__prev')) {
      global.console.log(eventChangeColor);
      changeColor();
    }

    if (eventChangeColor.closest('.predefined__red') || eventChangeColor.closest('.predefined__blue')) {
      global.console.log(eventChangeColor);
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

  colorContainer.addEventListener('click', colorChangeFromColorBar);
  canvasItem.addEventListener('click', colorPickFromCanvas);
};

const chooseToolBar = (obj) => {
  const buttons = document.querySelector('.tools__color');

  const toolChoose = (e) => {
    const toolbar = obj.tools;
    const toolEvent = e.target;

    [].forEach.call(buttons.children, (button) => {
      global.console.log(buttons.children);
      button.classList.remove('active');
    });

    if (toolEvent.getAttribute('data-tool') === 'pencil') {
      toolbar.pencil = true;
      toolbar.bucket = false;
      toolbar.picker = false;
      toolEvent.classList.add('active');
    }

    if (toolEvent.getAttribute('data-tool') === 'bucket') {
      toolbar.pencil = false;
      toolbar.bucket = true;
      toolbar.picker = false;
      toolEvent.classList.add('active');
    }

    if (toolEvent.getAttribute('data-tool') === 'picker') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.picker = true;
      toolEvent.classList.add('active');
    }
  };

  buttons.addEventListener('click', toolChoose);
};

const colorFill = (ctxItem, canvasItem, obj) => {
  const fillRect = () => {
    const { bucket } = obj.tools;
    if (bucket) {
      const context = ctxItem;
      const { width, height } = obj.canvasSize;
      const { current: currentColor } = obj.colors;
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

const hotKeys = (obj) => {
  const buttons = document.querySelector('.tools__color');

  const toolKeyPress = (e) => {
    const toolbar = obj.tools;

    [].forEach.call(buttons.children, (button) => {
      button.classList.remove('active');
    });
    if (e.code === 'KeyB') {
      toolbar.pencil = false;
      toolbar.bucket = true;
      toolbar.picker = false;
      document.querySelector('li[data-tool="bucket"]').classList.add('active');
    }

    if (e.code === 'KeyP') {
      toolbar.pencil = true;
      toolbar.bucket = false;
      toolbar.picker = false;
      document.querySelector('li[data-tool="pencil"]').classList.add('active');
    }

    if (e.code === 'KeyC') {
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
