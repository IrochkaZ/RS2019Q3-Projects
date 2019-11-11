import size4x4 from './size4x4';

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

export default state;
