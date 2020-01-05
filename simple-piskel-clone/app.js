
import './src/css/style.css';
import state from './src/Components/state';
import getSizes from './src/Components/getSizes';
import pencilDrawing from './src/Components/pencilDrawing';
import getColorPicker from './src/Components/getColorPicker';
import chooseToolBar from './src/Components/chooseToolBar';
import colorFill from './src/Components/colorFill';
import LocalStorageData from './src/Components/LocalStorageData';
import pxSizeChange from './src/Components/pxSizeChange';
import clearByEraser from './src/Components/clearByEraser';
// import lineDRawing from './src/Components/lineDrawing';


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// const canvasAlt = document.getElementById('canvasAlt');
// const ctxAlt = canvas.getContext('2d');

const init = () => {
  getSizes(canvas, state);
  LocalStorageData(canvas, ctx, state);
  pencilDrawing(canvas, ctx, state);
  getColorPicker(canvas, ctx, state);
  chooseToolBar(canvas, state);
  colorFill(ctx, canvas, state);
  pxSizeChange(state, ctx);
  clearByEraser(canvas, ctx);
};

init();
