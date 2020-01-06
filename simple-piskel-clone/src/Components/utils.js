module.exports = {

  canvasToFrame: (canvasItem, ctxItem) => {
    const activeItem = document.querySelector('.item.active');
    const preview = document.querySelector('.preview__item');
    preview.src = canvasItem.toDataURL();
    activeItem.firstElementChild.src = canvasItem.toDataURL();
    ctxItem.drawImage(activeItem.firstElementChild, 0, 0);
    ctxItem.drawImage(preview, 0, 0);

    // ctx.clearRect(0, 0, canvasItem.width, canvasItem.height);
  },

};
