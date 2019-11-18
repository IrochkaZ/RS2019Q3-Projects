const pxSizeChange = (obj) => {
  const range = document.querySelector('#range');
  const labelRange = document.querySelector('.px-size');
  const changeBlockSize = (object, ev) => {
    const st = object;
    st.blockSize.width = st.canvasSize.width / ev.target.value;
    st.blockSize.height = st.canvasSize.height / ev.target.value;
  };

  const rangeChangeListener = (event) => {
    changeBlockSize(obj, event);
    labelRange.innerText = event.target.value;
  };

  range.addEventListener('change', rangeChangeListener);
};

export default pxSizeChange;
