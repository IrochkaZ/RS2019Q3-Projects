const getSizes = (cloth, obj) => {
  const states = obj;
  states.canvasSize.width = cloth.width;
  states.canvasSize.height = cloth.height;
  states.blockSize.widthStart = cloth.width / states.canvasSize.scale;
  states.blockSize.heightStart = cloth.height / states.canvasSize.scale;
  states.blockSize.width = cloth.width / states.canvasSize.scale;
  states.blockSize.height = cloth.height / states.canvasSize.scale;
};

export default getSizes;
