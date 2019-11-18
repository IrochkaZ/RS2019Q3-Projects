import state from './state';

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

export default pencilDrawing;
