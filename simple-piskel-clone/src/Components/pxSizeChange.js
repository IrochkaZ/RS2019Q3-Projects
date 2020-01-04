const pxSizeChange = (obj) => {
  const range = document.querySelector('.pen-size-container ');
  const labelRange = document.querySelector('.pen-size-option');
  const changeBlockSize = (object, { target }) => {
    const st = object;
    st.blockSize.width = st.canvasSize.width / target.value;
    st.blockSize.height = st.canvasSize.height / target.value;
  };

  const rangeChangeListener = (event) => {
    changeBlockSize(obj, event);
    labelRange.innerText = event.target.value;
  };

  range.addEventListener('change', rangeChangeListener);
};

export default pxSizeChange;
