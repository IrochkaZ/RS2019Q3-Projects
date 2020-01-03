import state from './state';

const lineDrawing = (e, canvasItem, ctxItem) => {
  const context = ctxItem;
  const mouse = { x: 0, y: 0 };
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
  const { current: color } = state.colors;
  const lineDraw = ({ buttons }) => {
    const { stroke } = state.tools;
    if (buttons > 0 && stroke) {
      context.strokeStyle = color;
      context.beginPath();
      context.moveTo(mouse.x, mouse.y);
      context.lineTo(mouse.x, mouse.y);
      context.stroke();
    }
  };
  canvasItem.addEventListener('mousemove', lineDraw);
};

export default lineDrawing;
