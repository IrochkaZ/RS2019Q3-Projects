const pencilDrawing = (canvasItem, ctxItem, obj) => {
  const context = ctxItem;
  const state = obj;
  const pencilDraw = ({ offsetX, offsetY, buttons }) => {
    const { pencil } = state.tools;
    const { width, height } = state.blockSize;
    const { current: color } = state.colors;

    if (buttons > 0 && pencil) {
      const stepX = Math.floor(offsetX / width) * width;
      const stepY = Math.floor(offsetY / height) * height;
      context.fillStyle = color;
      context.fillRect(stepX, stepY, width, height);
    }
  };
  canvasItem.addEventListener('mousemove', pencilDraw);
};

export default pencilDrawing;
