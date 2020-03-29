import state from './state';

const colorFill = (ctxItem, canvasItem) => {
  const context = ctxItem;
  const fillRect = () => {
    const { bucket } = state.tools;
    if (bucket) {
      const { width, height } = state.canvasSize;
      const { current: currentColor } = state.colors;
      context.fillStyle = currentColor;
      context.fillRect(0, 0, width, height);
    }
  };

  canvasItem.addEventListener('mouseup', fillRect);
};

export default colorFill;
