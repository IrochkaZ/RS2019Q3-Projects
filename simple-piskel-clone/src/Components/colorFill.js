const colorFill = (ctxItem, canvasItem, obj) => {
  const fillRect = () => {
    const { bucket } = obj.tools;
    if (bucket) {
      const context = ctxItem;
      const { width, height } = obj.canvasSize;
      const { current: currentColor } = obj.colors;
      context.fillStyle = currentColor;
      context.fillRect(0, 0, width, height);
    }
  };

  canvasItem.addEventListener('click', fillRect);
};

export default colorFill;
