/* eslint-disable no-param-reassign */
/* eslint-disable radix */

import detete from '../assets/img/delete.png';
import move from '../assets/img/drag.png';
import duplicate from '../assets/img/duplicate.png';

document.querySelector('.item__delete').style.backgroundImage = `url(${detete})`;
document.querySelector('.item__drag').style.backgroundImage = `url(${move})`;
document.querySelector('.item__duplicate').style.backgroundImage = `url(${duplicate})`;
const frameWrap = document.querySelector('.item-wrap');


const framesMove = (ctx, obj) => {
  const { width, height } = obj.canvasSize;
  const addButtonFrame = document.querySelector('.add');
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
    item.firstElementChild.src = '';
    frameWrap.appendChild(item);
    ctx.clearRect(0, 0, width, height);
    frameItem.forEach((el) => {
      el.classList.remove('active');
    });
    frameWrap.lastChild.classList.add('active');
    changeItemNumber();
  });

  // eslint-disable-next-line consistent-return
  const deleteFrame = (event) => {
    if (event.target.classList.contains('item__delete')) {
      if (frameWrap.children.length < 2) {
        return frameWrap;
      } if (frameWrap.children.length >= 2) {
        frameWrap.removeChild(event.target.parentNode);
        ctx.clearRect(0, 0, width, height);
      }
    }
    changeItemNumber();
  };

  const duplicateFrame = (event) => {
    if (event.target.classList.contains('item__duplicate')) {
      const duplicateNode = event.target.parentNode.cloneNode(true);
      frameWrap.insertBefore(duplicateNode, event.target.parentNode);
      document.querySelector('.item.active').classList.remove('active');
      frameWrap.lastElementChild.classList.add('active');
      changeItemNumber();
    }
  };

  document.querySelector('.item-wrap').addEventListener('click', (event) => {
    if (event.target.classList.contains('item__duplicate')) {
      duplicateFrame(event);
    }

    if (event.target.classList.contains('item__delete')) {
      deleteFrame(event);
    }
  });
};

export default framesMove;
