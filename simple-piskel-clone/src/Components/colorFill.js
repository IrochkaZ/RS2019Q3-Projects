const colorFill = (ctxItem, canvasItem, obj) => {
  const context = ctxItem;
  const state = obj;
  const fillRect = () => {
    const { bucket } = state.tools;
    if (bucket) {
      const { width, height } = state.canvasSize;
      const { current: currentColor } = state.colors;
      context.fillStyle = currentColor;
      context.fillRect(0, 0, width, height);
    }
  };

  canvasItem.addEventListener('click', fillRect);
};

export default colorFill;
