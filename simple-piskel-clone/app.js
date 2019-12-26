
import './src/css/style.css';
import state from './src/Components/state';
import getSizes from './src/Components/getSizes';
import pencilDrawing from './src/Components/pencilDrawing';
import getColorPicker from './src/Components/getColorPicker';
import chooseToolBar from './src/Components/chooseToolBar';
import colorFill from './src/Components/colorFill';
import LocalStorageData from './src/Components/LocalStorageData';
import pxSizeChange from './src/Components/pxSizeChange';


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const init = () => {
  getSizes(canvas, state);
  LocalStorageData(canvas, ctx, state);
  pencilDrawing(canvas, ctx);
  getColorPicker(canvas, ctx, state);
  chooseToolBar(state);
  colorFill(ctx, canvas, state);
  pxSizeChange(state);
};

init();
