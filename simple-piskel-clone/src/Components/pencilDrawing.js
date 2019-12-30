import state from './state';

const pencilDrawing = (canvasItem, ctxItem) => {
  const context = ctxItem;
  const pencilDraw = ({ offsetX, offsetY, buttons }) => {
    const { pencil } = state.tools;
    const { width, height } = state.blockSize;
    const { current: color } = state.colors;

    if (buttons > 0 && pencil) {
      global.console.log(pencil);
      const stepX = Math.floor(offsetX / width) * width;
      const stepY = Math.floor(offsetY / height) * height;
      context.fillStyle = color;
      context.fillRect(stepX, stepY, width, height);
    }
  };
  canvasItem.addEventListener('mousemove', pencilDraw);
};

export default pencilDrawing;
