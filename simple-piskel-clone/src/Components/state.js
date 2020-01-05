const state = {
  tools: {
    pencil: true,
    bucket: false,
    eraser: false,
    stroke: false,
  },
  colors: {
    current: '#ff0000',
    prev: '',
  },
  canvasSize: {
    width: 0,
    height: 0,
    scale: 128,
  },
  blockSize: {
    widthStart: 0,
    heightStart: 0,
    width: 0,
    height: 0,
  },
  penSize: 0,
  domToolActive: document.querySelector('.tools__list > .active'),
};

export default state;
