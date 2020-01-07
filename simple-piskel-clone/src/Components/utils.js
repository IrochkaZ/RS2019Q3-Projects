module.exports = {
  canvasToFrame: (canvasItem, ctxItem) => {
    const activeItem = document.querySelector('.item.active');
    activeItem.firstElementChild.src = canvasItem.toDataURL();
    ctxItem.drawImage(activeItem.firstElementChild, 0, 0);
  },

  framesSyncToPreview: () => {
    const images = document.querySelectorAll('.item__img');
    const preview = document.querySelector('.preview');
    preview.innerHTML = '';
    Object.values(images).forEach((frame, index) => {
      const element = frame.cloneNode(true);
      element.classList.remove('item__img');
      element.classList.add('preview__item');
      if (index === 0) {
        element.classList.add('active');
      }
      preview.append(element);
    });
  },

};
