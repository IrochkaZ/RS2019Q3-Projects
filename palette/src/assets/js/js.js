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


const init = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  getSizes(canvas, size4x4, state);
};

init();
