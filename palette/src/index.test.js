import size4x4 from './assets/js/size4x4';
import getSizes from './assets/js/getSizes';

test('canvas size check', () => {
  const canvasEl = document.createElement('canvas');
  canvasEl.id = 'canvas';
  canvasEl.width = '512';
  canvasEl.height = '512';

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

  getSizes(canvasEl, state.matrix, state);
  const { width, height } = state.canvasSize;
  expect(canvasEl).toBeInstanceOf(HTMLElement);
  expect(width).toEqual(512);
  expect(height).toEqual(512);
});