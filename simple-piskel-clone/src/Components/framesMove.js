/* eslint-disable no-shadow */
import detete from '../assets/img/delete.png';
import move from '../assets/img/drag.png';
import duplicate from '../assets/img/duplicate.png';

document.querySelector('.item__delete').style.backgroundImage = `url(${detete})`;
document.querySelector('.item__drag').style.backgroundImage = `url(${move})`;
document.querySelector('.item__duplicate').style.backgroundImage = `url(${duplicate})`;

const framesMove = (ctx, obj) => {
  const { width, height } = obj.canvasSize;
  const addButtonFrame = document.querySelector('.add');

  addButtonFrame.addEventListener('click', () => {
    const frameWrap = document.querySelector('.item-wrap');
    const frameItem = document.querySelectorAll('.frames .item');
    const item = frameItem[0].cloneNode(true);
    item.classList.remove('active');
    frameWrap.appendChild(item);
    ctx.clearRect(0, 0, width, height);
    frameItem.forEach((el) => {
      el.classList.remove('active');
    });
    const activeFrameIndex = parseInt((frameItem.length), 10);
    global.console.log(activeFrameIndex);
    frameWrap.lastChild.classList.add('active');
  });
};


export default framesMove;
