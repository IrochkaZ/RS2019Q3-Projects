const greyScale = (canv, obj) => {
  const buttonGrey = document.querySelector('.black_and_white');
  const toGrey = () => {
    const { width, height } = obj.canvasSize;
    const imageData = canv.getImageData(0, 0, width, height);
    const { data } = imageData;
    const arraylength = width * height * 4;

    for (let i = arraylength - 1; i > 0; i -= 4) {
      const gray = 0.3 * data[i - 3] + 0.59 * data[i - 2] + 0.11 * data[i - 1];
      data[i - 3] = gray;
      data[i - 2] = gray;
      data[i - 1] = gray;
    }
    canv.putImageData(imageData, 0, 0);
  };

  const buttonGreyListener = (event) => {
    event.preventDefault();
    toGrey();
  };
  buttonGrey.addEventListener('click', buttonGreyListener);
};

export default greyScale;
