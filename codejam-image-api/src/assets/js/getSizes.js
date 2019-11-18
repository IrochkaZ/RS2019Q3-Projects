const getSizes = (cloth, obj) => {
  const states = obj;
  states.canvasSize.width = cloth.width;
  states.canvasSize.height = cloth.height;
  states.blockSize.width = cloth.width / 128;
  states.blockSize.height = cloth.height / 128;
};

export default getSizes;
