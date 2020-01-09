/* eslint-disable no-plusplus */

import './src/css/style.css';
import {
  canvasToFrame, framesSyncToPreview, player,
} from './src/сomponents/utils';
import state from './src/сomponents/state';
import getSizes from './src/сomponents/getSizes';
import pencilDrawing from './src/сomponents/pencilDrawing';
import getColorPicker from './src/сomponents/getColorPicker';
import chooseToolBar from './src/сomponents/chooseToolBar';
import colorFill from './src/сomponents/colorFill';
import LocalStorageData from './src/сomponents/LocalStorageData';
import pxSizeChange from './src/сomponents/pxSizeChange';
import clearByEraser from './src/сomponents/clearByEraser';
import hotKeys from './src/сomponents/hotKeys';
import framesMove from './src/сomponents/framesMove';
import previewAnimation from './src/сomponents/previewAnimation';
import updateAll from './src/сomponents/updateAll';


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
  previewAnimation(player);
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
  window.clearInterval(state.animation);
  state.animation = player();
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

// COORDINATES
canvas.onmousemove = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  document.querySelector('.cursor-coordinates').innerHTML = `x: ${x} y: ${y}`;
};
