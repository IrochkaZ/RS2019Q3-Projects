const previewAnimation = () => {
  // const preview = document.querySelector('.preview');
  // const previewItem = document.querySelectorAll('.preview__item');
  const previewRange = document.querySelector('.preview__input');
  // const itemImg = document.querySelectorAll('.item__img');
  // const fullImg = document.getElementsByClassName('item__img');
  let fps = 1;
  previewRange.value = fps;

  // const step = (fps) => {
  //   setTimeout(() => {
  //     requestAnimationFrame(step);
  //   }, 1000 / fps);
  // };

  previewRange.addEventListener('input', (event) => {
    document.querySelector('#fps-number').textContent = event.target.value;
    fps = event.target.value;
  });
};


export default previewAnimation;
