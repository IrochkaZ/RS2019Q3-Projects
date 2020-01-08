/* eslint-disable no-plusplus */

import './src/css/style.css';
import { canvasToFrame, framesSyncToPreview, player } from './src/Components/utils';
import state from './src/Components/state';
import getSizes from './src/Components/getSizes';
import pencilDrawing from './src/Components/pencilDrawing';
import getColorPicker from './src/Components/getColorPicker';
import chooseToolBar from './src/Components/chooseToolBar';
import colorFill from './src/Components/colorFill';
import LocalStorageData from './src/Components/LocalStorageData';
import pxSizeChange from './src/Components/pxSizeChange';
import clearByEraser from './src/Components/clearByEraser';
import hotKeys from './src/Components/hotKeys';
import framesMove from './src/Components/framesMove';
import previewAnimation from './src/Components/previewAnimation';
import updateAll from './src/Components/updateAll';


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', () => {
  if (canvas) {
    canvas.style.cursor = 'pointer';
  } else {
    canvas.style.cursor = 'default';
  }
});


const init = () => {
  getSizes(canvas, state);
  LocalStorageData(canvas, ctx, state);
  pencilDrawing(canvas, ctx, state);
  getColorPicker(canvas, ctx, state);
  chooseToolBar(state);
  colorFill(ctx, canvas, state);
  pxSizeChange(state, ctx);
  clearByEraser(canvas, ctx);
  framesMove(canvas, ctx, state);
  hotKeys(state);
  previewAnimation();
};

new Promise((resolve) => {
  resolve(init());
}).then(updateAll());

canvas.addEventListener('mousedown', () => {
  canvasToFrame(canvas, ctx);
});

canvas.addEventListener('mouseup', () => {
  canvasToFrame(canvas, ctx);
  framesSyncToPreview(state);
  player(state);
});

// fullscreen
const fullScreen = document.querySelector('.fullscreen');
fullScreen.addEventListener('click', () => document.querySelector('.preview').requestFullscreen());

// DOWNLOAD CANVAS
const linkGif = document.querySelector('.gif');
linkGif.addEventListener('click', () => {
  linkGif.href = canvas.toDataURL();
  linkGif.download = 'mypainting.gif';
}, false);

const linkApng = document.querySelector('.apng');
linkApng.addEventListener('click', () => {
  linkApng.href = canvas.toDataURL();
  linkApng.download = 'mypainting.apng';
}, false);


window.addEventListener('unload', () => {
  localStorage.setItem('state', JSON.stringify(state));
});
