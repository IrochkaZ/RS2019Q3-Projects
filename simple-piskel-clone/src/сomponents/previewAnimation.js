import state from './state';

const previewAnimation = () => {
  const previewRange = document.querySelector('.preview__input');
  previewRange.addEventListener('input', (event) => {
    document.querySelector('#fps-number').textContent = event.target.value;
    state.fps = event.target.value;
  });
};


export default previewAnimation;
