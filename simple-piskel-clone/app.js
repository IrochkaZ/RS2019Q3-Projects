/* eslint-disable no-plusplus */

import './src/css/style.css';
import { canvasToFrame, framesSyncToPreview } from './src/Components/utils';
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
// import lineDRawing from './src/Components/lineDrawing';
import framesMove from './src/Components/framesMove';
import previewAnimation from './src/Components/previewAnimation';


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
  chooseToolBar(canvas, state);
  colorFill(ctx, canvas, state);
  pxSizeChange(state, ctx);
  clearByEraser(canvas, ctx);
  framesMove(ctx, state);
  hotKeys(state);
  previewAnimation();
};

init();

canvas.addEventListener('mousedown', () => {
  canvasToFrame(canvas, ctx);
});

canvas.addEventListener('mousemove', () => {
});

canvas.addEventListener('mouseup', () => {
  canvasToFrame(canvas, ctx);
  framesSyncToPreview();
});


// const download = (filename, text) => {
//   const link = document.createElement('a');
// eslint-disable-next-line max-len
//   link.setAttribute('href', `data:text/plain;charset=utf-8,encodeURIComponent(text)${encodeURIComponent(text)}`);
//   link.setAttribute('download', filename);
//   if (document.createEvent) {
//     const event = document.createEvent('MouseEvents');
//     event.initEvent('click', true, true);
//     link.dispatchEvent(event);
//   } else {
//     link.click();
//   }
// };

// const getSave = document.querySelector('.save');
// getSave.addEventListener('click', () => {
//   download('piskel', localStorage.getItem('session'));
// });

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
