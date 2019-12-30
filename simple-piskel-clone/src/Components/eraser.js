import state from './state';

const clearByEraser = (canvasItem, ctxItem) => {
  const context = ctxItem;
  const eraserDraw = ({ offsetX, offsetY, buttons }) => {
    const { eraser } = state.tools;
    const { width, height } = state.blockSize;
    // const { prev: color } = state.colors;
    if (buttons > 0 && eraser) {
      global.console.log(eraser);
      const stepX = Math.floor(offsetX / width) * width;
      const stepY = Math.floor(offsetY / height) * height;
      // context.fillStyle = color;
      context.clearRect(stepX, stepY, width, height);
    }
  };

  canvasItem.addEventListener('mousemove', eraserDraw);
};

export default clearByEraser;
