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
    Object.values(images).forEach((frame) => {
      const element = frame.cloneNode(true);
      element.classList.remove('item__img');
      element.classList.add('preview__item');
      preview.append(element);
    });
  },

  framesSyncToCanvas: (canvasItem, ctxItem) => {
    const activeItem = document.querySelector('.item.active');
    ctxItem.clearRect(0, 0, canvasItem.width, canvasItem.height);
    const img = new Image();
    const imageFrame = activeItem.firstElementChild.currentSrc;
    img.src = imageFrame;
    img.onload = () => {
      ctxItem.drawImage(img, 0, 0);
    };
  },

  player: (st) => {
    const state = st;
    const fps = document.querySelector('.preview__input').value;
    const framesCount = document.querySelector('.preview').childElementCount;
    if (framesCount > 1) {
      let frm = 0;
      state.animation = setInterval(() => {
        if (frm === framesCount) {
          frm = 0;
        }

        if (frm === 0) {
          document.querySelector('.preview').children[framesCount - 1].style.display = 'none';
          document.querySelector('.preview').children[frm].style.display = '';
        }

        if (frm >= 1) {
          document.querySelector('.preview').children[frm - 1].style.display = 'none';
          document.querySelector('.preview').children[frm].style.display = '';
        }
        frm += 1;
      }, 1000 / parseInt(fps, 10));
    }
  },

  clearCanvas: (ctxItem, canvasItem) => {
    const button = document.querySelector('.clear');
    button.addEventListener('click', () => {
      ctxItem.clearRect(0, 0, canvasItem.width, canvasItem.height);
      this.canvasToFrame(canvasItem, ctxItem);
    });
  },

};
