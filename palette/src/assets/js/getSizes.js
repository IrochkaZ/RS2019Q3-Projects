const getSizes = (cloth, array, obj) => {
  const states = obj;
  states.canvasSize.width = cloth.width;
  states.canvasSize.height = cloth.height;
  states.blockSize.width = cloth.width / array.length;
  states.blockSize.height = cloth.height / array[0].length;
};

export default getSizes;
