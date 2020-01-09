const pxSizeChange = (obj) => {
  const penSizeWrap = document.querySelector('.pen-size-container ');
  const state = obj;

  penSizeWrap.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-size')) {
      document.querySelector('.pen-size-option.selected').classList.remove('selected');
      event.target.classList.add('selected');
      state.blockSize.width = state.blockSize.widthStart * event.target.getAttribute('data-size');
      state.blockSize.height = state.blockSize.heightStart * event.target.getAttribute('data-size');
    }
  });
};


export default pxSizeChange;
