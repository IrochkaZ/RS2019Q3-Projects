
import '../main.css';
import state from './state';
import getSizes from './getSizes';
import pencilDrawing from './pencilDrawing';
import getColorPicker from './getColorPicker';
import chooseToolBar from './chooseToolBar';
import colorFill from './colorFill';
import LocalStorageData from './LocalStorageData';
import imageTownCityLoad from './imageTownCityLoad';
import pxSizeChange from './pxSizeChange';
import greyScale from './greyScale';

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
  imageTownCityLoad(ctx);
  greyScale(ctx, state);
};

init();
