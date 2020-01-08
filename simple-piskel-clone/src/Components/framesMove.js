/* eslint-disable no-param-reassign */
/* eslint-disable radix */
import { framesSyncToCanvas } from './utils';
import detete from '../assets/img/delete.png';
import move from '../assets/img/drag.png';
import duplicate from '../assets/img/duplicate.png';
import blankImg from '../assets/img/blank-bg.png';

document.querySelector('.item__delete').style.backgroundImage = `url(${detete})`;
document.querySelector('.item__drag').style.backgroundImage = `url(${move})`;
document.querySelector('.item__duplicate').style.backgroundImage = `url(${duplicate})`;


const framesMove = (canvasItem, ctx, obj) => {
  const frameWrap = document.querySelector('.item-wrap');
  const { width, height } = obj.canvasSize;
  const addButtonFrame = document.querySelector('.add');

  let startY = '';
  let endY = '';
  let isDrag = false;

  const changeItemNumber = () => {
    const ulItems = document.getElementsByClassName('item__number');
    Object.values(ulItems).forEach((el, index) => {
      el.innerText = index + 1;
    });
  };

  addButtonFrame.addEventListener('click', () => {
    const frameItem = document.querySelectorAll('.frames .item');
    const item = frameItem[0].cloneNode(true);
    item.classList.remove('active');
    item.firstElementChild.src = blankImg;
    frameWrap.appendChild(item);
    ctx.clearRect(0, 0, width, height);
    frameItem.forEach((el) => {
      el.classList.remove('active');
    });
    frameWrap.lastChild.classList.add('active');
    changeItemNumber();
  });

  const deleteFrame = (event) => {
    let result = '';
    if (event.target.classList.contains('item__delete')) {
      if (frameWrap.children.length < 2) {
        result = frameWrap;
      } if (frameWrap.children.length >= 2) {
        frameWrap.removeChild(event.target.parentNode);
        ctx.clearRect(0, 0, width, height);
      }
    }
    changeItemNumber();
    return result;
  };

  const duplicateFrame = (event) => {
    if (event.target.classList.contains('item__duplicate')) {
      const activeFrame = document.querySelector('.item.active');
      const duplicateNode = event.target.parentNode.cloneNode(true);
      frameWrap.insertBefore(duplicateNode, event.target.parentNode);
      activeFrame.classList.remove('active');
      frameWrap.lastElementChild.classList.add('active');
      changeItemNumber();
    }
  };

  frameWrap.addEventListener('click', (event) => {
    if (event.target.classList.contains('item__img')) {
      document.querySelector('.item.active').classList.remove('active');
      event.target.parentNode.classList.add('active');
    }

    if (event.target.classList.contains('item__duplicate')) {
      duplicateFrame(event);
    }

    if (event.target.classList.contains('item__delete')) {
      deleteFrame(event);
    }
    if (event.target.parentNode.classList.contains('active')) {
      framesSyncToCanvas(canvasItem, ctx);
    }
  });


  frameWrap.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('item__drag')) {
      isDrag = true;
      startY = event.clientY;
    }
  });

  frameWrap.addEventListener('mousemove', (event) => {
    if (event.target.classList.contains('item__drag') && isDrag === true) {
      endY = event.clientY;
    }
  });

  frameWrap.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('item__drag')) {
      if (isDrag === true) {
        global.console.log(startY, endY);
      }
      isDrag = false;
    }
  });
  frameWrap.addEventListener('mousemleave', () => {
    isDrag = false;
  });
};

export default framesMove;
