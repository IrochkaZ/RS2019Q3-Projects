const state = {
  tools: {
    pencil: true,
    bucket: false,
    eraser: false,
    stroke: false,
  },
  colors: {
    current: '#7922CC',
    prev: '#ffd700',
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
  animation: '',
  fps: 1,
  frames: [],
};

export default state;
