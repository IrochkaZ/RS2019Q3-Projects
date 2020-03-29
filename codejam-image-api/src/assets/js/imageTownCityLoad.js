import state from './state';

const imageTownCityLoad = (newCtxItem) => {
  const townInput = document.querySelector('.search__town');
  const townLoadButton = document.querySelector('.town__load');
  const imgToCanvas = (imgObject, obj, context) => {
    const objImg = imgObject;
    let zoomIndex = 0;
    let stepDx = 0;
    let stepDy = 0;
    const canvasWidth = obj.canvasSize.width;
    const canvasHeight = obj.canvasSize.height;
    let pictWidth = objImg.width;
    let pictHeight = objImg.height;
    if (pictWidth > pictHeight && pictWidth < canvasWidth) {
      zoomIndex = canvasWidth / pictWidth;
      pictWidth *= zoomIndex;
      pictHeight *= zoomIndex;
      stepDx = 0;
      stepDy = (canvasHeight - (pictHeight)) / 2;
    } else if (pictHeight > pictWidth && pictHeight < canvasHeight) {
      zoomIndex = canvasHeight / pictHeight;
      pictWidth *= zoomIndex;
      pictHeight *= zoomIndex;
      stepDx = (canvasWidth - (pictWidth)) / 2;
      stepDy = 0;
    }

    objImg.addEventListener('load', () => {
      if (zoomIndex) {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(objImg, stepDx, stepDy, pictWidth, pictHeight);
      }
    });
  };

  const getImgTown = async (town, ctxItem) => {
    const { url, key } = state.api;
    const query = `town, ${town}`;
    const fullLink = `${url}?query=${query}&client_id=${key}`;
    const response = await fetch(fullLink);
    const data = await response.json();
    const image = new Image();
    image.src = data.urls.small;
    const coefficient = parseInt(data.width, 10) / 400;
    image.width = 400;
    image.height = (parseInt(data.height, 10) / coefficient).toFixed(0);
    image.setAttribute('crossOrigin', '');
    image.addEventListener('load', imgToCanvas(image, state, ctxItem));
  };

  const townLoadButtonListener = (e) => {
    e.preventDefault();
    if (townInput.value) {
      getImgTown(townInput.value, newCtxItem);
    }
  };

  townLoadButton.addEventListener('click', townLoadButtonListener);
};


export default imageTownCityLoad;
