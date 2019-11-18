import size4x4 from './size4x4';
import '../main.css';
// import rslogo from '../img/rs.png';

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
    isSet: false,
  },
};

const getSizes = (cloth, array, obj) => {
  const states = obj;
  states.canvasSize.width = cloth.width;
  states.canvasSize.height = cloth.height;
  states.blockSize.width = cloth.width / 128;
  states.blockSize.height = cloth.height / 128;
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

const LocalStorageData = (canvasItem, ctxItem, obj) => {
  const { width, height } = obj.canvasSize;
  if (localStorage.getItem('image')) {
    const img = new Image();
    img.onload = () => {
      ctxItem.clearRect(0, 0, width, height);
      ctxItem.drawImage(img, 0, 0);
    };
    img.src = localStorage.getItem('image');
    ctxItem.drawImage(img, 0, 0);
  }

  const saveData = () => {
    localStorage.setItem('image', canvasItem.toDataURL());
  };

  window.addEventListener('unload', saveData);
};

const imageTownCityLoad = (newCtxItem) => {
  const townInput = document.querySelector('.search__town');
  const townLoadButton = document.querySelector('.town__load');
  const imgToCanvas = (imgObject, obj, context) => {
    const objImg = imgObject;
    let zoomIndex = 0;
    let stepDx = 0;
    let stepDy = 0;
    const canvasWidth = obj.canvasSize.width;
    const canvasHeight = obj.canvasSize.height;
    let pictWidth = objImg.width;
    let pictHeight = objImg.height;
    if (pictWidth > pictHeight && pictWidth < canvasWidth) {
      zoomIndex = canvasWidth / pictWidth;
      pictWidth *= zoomIndex;
      pictHeight *= zoomIndex;
      stepDx = 0;
      stepDy = (canvasHeight - (pictHeight)) / 2;
    } else if (pictHeight > pictWidth && pictHeight < canvasHeight) {
      zoomIndex = canvasHeight / pictHeight;
      pictWidth *= zoomIndex;
      pictHeight *= zoomIndex;
      stepDx = (canvasWidth - (pictWidth)) / 2;
      stepDy = 0;
    }

    if (zoomIndex !== 0) {
      objImg.onload = () => {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(objImg, stepDx, stepDy, pictWidth, pictHeight);
      };
    }
  };

  const getImgTown = async (town, ctxItem) => {
    const { url, key } = state.api;
    const query = `town, ${town}`;
    const fullLink = `${url}?query=${query}&client_id=${key}`;
    const response = await fetch(fullLink);
    const data = await response.json();
    const image = new Image();
    image.src = `${data.urls.small}`;
    const koeff = parseInt(data.width, 10) / 400;
    image.width = 400;
    image.height = (parseInt(data.height, 10) / koeff).toFixed(0);
    image.setAttribute('crossOrigin', '');
    setTimeout(() => {
      imgToCanvas(image, state, ctxItem);
    }, 10);
  };

  const townLoadButtonListener = (e) => {
    e.preventDefault();
    if (townInput.value) {
      getImgTown(townInput.value, newCtxItem);
    }
  };

  townLoadButton.addEventListener('click', townLoadButtonListener);
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
  };

  range.addEventListener('change', rangeChangeListener);
};

const greyScale = (canv, obj) => {
  const buttonGrey = document.querySelector('.black_and_white');
  const toGrey = () => {
    const { width, height } = obj.canvasSize;
    const imageData = canv.getImageData(0, 0, width, height);
    const { data } = imageData;
    const arraylength = width * height * 4;

    for (let i = arraylength - 1; i > 0; i -= 4) {
      const gray = 0.3 * data[i - 3] + 0.59 * data[i - 2] + 0.11 * data[i - 1];
      data[i - 3] = gray;
      data[i - 2] = gray;
      data[i - 1] = gray;
    }
    canv.putImageData(imageData, 0, 0);
  };

  const buttonGreyListener = (e) => {
    e.preventDefault();
    toGrey();
  };
  buttonGrey.addEventListener('click', buttonGreyListener);
};

const init = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  getSizes(canvas, size4x4, state);
  LocalStorageData(canvas, ctx, state);
  pencilDrawing(canvas, ctx);
  getColorPicker(canvas, ctx, state);
  chooseToolBar(state);
  colorFill(ctx, canvas, state);
  pxSizeChange(state);
  imageTownCityLoad(ctx);
  greyScale(ctx, state);
};

init();
