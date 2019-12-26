const LocalStorageData = (canvasItem, ctxItem, obj) => {
  const { width, height } = obj.canvasSize;
  if (localStorage.getItem('image')) {
    const img = new Image();
    img.addEventListener('load', () => {
      ctxItem.clearRect(0, 0, width, height);
      ctxItem.drawImage(img, 0, 0);
    });
    img.src = localStorage.getItem('image');
    ctxItem.drawImage(img, 0, 0);
  }

  const saveData = () => {
    localStorage.setItem('image', canvasItem.toDataURL());
  };

  window.addEventListener('unload', saveData);
};

export default LocalStorageData;
