const state = {
  tools: {
    pencil: true,
    bucket: false,
    eraser: false,
    stroke: false,
  },
  colors: {
    current: '',
    prev: '',
  },
  canvasSize: {
    width: 0,
    height: 0,
  },
  blockSize: {
    width: 0,
    height: 0,
  },
  domToolActive: document.querySelector('.tools__list > .active'),
};

export default state;
