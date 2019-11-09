import { isArray } from 'util';
import size4x4 from './size4x4';
import '../main.css';

const state = {
  tools: {
    pencil: true,
    bucket: false,
    picker: false,
  },
  colors: {
    current: '#c4c4c4',
    prev: '#41f795',
  },
  canvasSize: {
    width: 0,
    height: 0,
  },
  blockSize: {
    width: 0,
    height: 0,
  },
  matrix: size4x4,
};

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
      if (isArray(col)) {
        context.fillStyle = `rgba(${col[0]}, ${col[1]}, ${col[2]}, ${col[3]})`;
      } else {
        context.fillStyle = `#${col}`;
      }
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
      state.matrix[stepX][stepY] = color.slice(1, color.length).toUpperCase();
      context.fillRect(stepX * width, stepY * height, stepX + width, stepY + height);
    }
  };
  canvasItem.addEventListener('mousemove', pencilDraw);
};

const getColorPicker = (canvasItem, ctxItem, obj) => {
  const colorContainer = document.querySelector('.color__show');

  const changeColor = (predefinedColor = null) => {
    const colorState = obj.colors;
    const currColor = document.querySelector('.color__current > span');
    const prevColor = document.querySelector('.color__prev > span');
    const tempColor = colorState.current;
    if (predefinedColor) {
      colorState.current = predefinedColor;
      colorState.prev = tempColor;
    } else {
      colorState.current = colorState.prev;
      colorState.prev = tempColor;
    }
    currColor.style.background = colorState.current;
    prevColor.style.background = colorState.prev;
  };

  const colorChangeFromColorBar = (event) => {
    const eventChangeColor = event.target;
    if (eventChangeColor.classList.contains('color__current') || eventChangeColor.classList.contains('color__prev')) {
      changeColor();
    }

    if (eventChangeColor.classList.contains('color__show-current') || eventChangeColor.classList.contains('color__show-prev')) {
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

    if (picker === true) {
      const rgba = ctxItem.getImageData(x, y, 1, 1).data;
      changeColor(`#${rgbToHex(...rgba)}`);
    }
  };

  colorContainer.addEventListener('click', colorChangeFromColorBar);
  canvasItem.addEventListener('click', colorPickFromCanvas);
};

const chooseToolBar = (obj) => {
  const buttons = document.querySelector('.tools');

  const toolChoose = (e) => {
    const toolbar = obj.tools;

    [].forEach.call(buttons.children, (button) => {
      button.classList.remove('active');
    });

    if (e.target.getAttribute('data-tool') === 'pencil') {
      toolbar.pencil = true;
      toolbar.bucket = false;
      toolbar.picker = false;
      e.target.classList.add('active');
    }

    if (e.target.getAttribute('data-tool') === 'bucket') {
      toolbar.pencil = false;
      toolbar.bucket = true;
      toolbar.picker = false;
      e.target.classList.add('active');
    }

    if (e.target.getAttribute('data-tool') === 'picker') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.picker = true;
      e.target.classList.add('active');
    }
  };

  buttons.addEventListener('click', toolChoose);
};

const init = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  getSizes(canvas, size4x4, state);
  drawCanvas(size4x4, canvas, ctx);
  pencilDrawing(canvas, ctx);
  getColorPicker(canvas, ctx, state);
  chooseToolBar(state);
};

init();
