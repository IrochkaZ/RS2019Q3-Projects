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
  api: {
    url: 'https://api.unsplash.com/photos/random',
    key: '4dc7bf52cd0116045a1668d9c6809696591d70a85a44b56b005d4326e3e7bbee',
    img: new Image(),
  },
};

const getSizes = (cloth, array, obj) => {
  const states = obj;
  states.canvasSize.width = cloth.width;
  states.canvasSize.height = cloth.height;
  states.blockSize.width = cloth.width / 128;
  states.blockSize.height = cloth.height / 128;
  global.console.log(cloth.width, cloth.height, states.blockSize.width, states.blockSize.height);
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
      const stepX = Math.floor(x / width) * width;
      const stepY = Math.floor(y / height) * height;
      context.fillStyle = color;
      context.fillRect(stepX, stepY, width, height);
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
    if (eventChangeColor.classList.contains('color__current') || eventChangeColor.classList.contains('color__prev')) {
      changeColor();
      global.console.log(event.target);
      global.console.log('currprev');
    }

    if (eventChangeColor.classList.contains('predefined__red') || eventChangeColor.classList.contains('predefined__blue')) {
      changeColor(eventChangeColor.getAttribute('data-color'));
      global.console.log(event.target);
      global.console.log('predef');
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

const chooseToolBar = (obj) => {
  const buttons = document.querySelector('.tools__color');

  const toolChoose = (e) => {
    const toolbar = obj.tools;
    const toolEvent = e.target;

    [].forEach.call(buttons.children, (button) => {
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

const getImgTown = async (town) => {
  const { url, key } = state.api;
  const query = `town, ${town}`;
  const fullLink = `${url}?query=${query}&client_id=${key}`;

  const response = await fetch(fullLink);
  const data = await response.json();
  state.api.img.src = data.urls.small;
  return state.api.img.src;
};

const pxSizeChange = (obj) => {
  const range = document.querySelector('#range');
  const labelRange = document.querySelector('.px-size');

  const changeBlockSize = (object, ev) => {
    const st = object;
    st.blockSize.width = st.canvasSize.width / ev.target.value;
    st.blockSize.height = st.canvasSize.height / ev.target.value;
  };

  const rangeChangeListener = (event) => {
    changeBlockSize(obj, event);
    labelRange.innerText = event.target.value;
    global.console.log(obj.blockSize);
  };
  range.addEventListener('change', rangeChangeListener);
};

getImgTown('Minsk');

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
  pxSizeChange(state);
};

init();
