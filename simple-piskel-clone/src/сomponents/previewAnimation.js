import state from './state';

const previewAnimation = (playerFn) => {
  const previewRange = document.querySelector('.preview__input');
  previewRange.addEventListener('input', (event) => {
    document.querySelector('#fps-number').textContent = event.target.value;
    state.fps = event.target.value;
    window.clearInterval(state.animation);
    state.animation = playerFn();
  });
};

export default previewAnimation;
