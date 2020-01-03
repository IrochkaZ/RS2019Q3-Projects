import state from './state';

let lastMouseX;
let lastMouseY;
let isDrawing = false;
const tempImg = new Image();

const lineDrawing = (canvasItem, ctxItem, canvasItemAlt, ctxItemAlt) => {
  const { tools } = state;

  canvasItemAlt.addEventListener('mousedown', (event) => {
    if (tools.stroke === true) {
      isDrawing = true;
      lastMouseX = event.offsetX;
      lastMouseY = event.offsetY;
    }
  });

  canvasItemAlt.addEventListener('mousemove', (event) => {
    if (tools.stroke === true && isDrawing === true) {
      ctxItemAlt.beginPath();
      ctxItemAlt.clearRect(0, 0, canvasItemAlt.width, canvasItemAlt.height);
      ctxItemAlt.moveTo(lastMouseX, lastMouseY);
      ctxItemAlt.lineTo(event.offsetX, event.offsetY);
      ctxItemAlt.stroke();
      ctxItemAlt.closePath();
    }
  });

  canvasItemAlt.addEventListener('mouseup', () => {
    if (tools.stroke === true) {
      isDrawing = false;
      tempImg.src = canvasItemAlt.toDataURL();
      global.console.log(tempImg.src);
      ctxItem.drawImage(canvasItemAlt, 0, 0, canvasItem.width, canvasItem.height);
      ctxItemAlt.clearRect(0, 0, canvasItemAlt.width, canvasItemAlt.height);
    }
  });
};

export default lineDrawing;
