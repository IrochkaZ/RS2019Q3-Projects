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

const init = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  getSizes(canvas, size4x4, state);
  drawCanvas(size4x4, canvas, ctx);
  pencilDrawing(canvas, ctx);
};

init();
