const hotKeys = ({ tools }) => {
  const buttons = document.querySelector('.tools__list');

  const toolKeyPress = ({ code }) => {
    const toolbar = tools;

    [].forEach.call(buttons.children, (button) => {
      button.classList.remove('active');
    });
    if (code === 'KeyB') {
      toolbar.pencil = false;
      toolbar.bucket = true;
      toolbar.eraser = false;
      toolbar.stroke = false;
      document.querySelector('li[data-tool="bucket"]').classList.add('active');
    }

    if (code === 'KeyP') {
      toolbar.pencil = true;
      toolbar.bucket = true;
      toolbar.eraser = false;
      toolbar.stroke = false;
      document.querySelector('li[data-tool="pencil"]').classList.add('active');
    }
    if (code === 'KeyE') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.eraser = true;
      toolbar.stroke = false;
      document.querySelector('li[data-tool="eraser"]').classList.add('active');
    }
    if (code === 'KeyS') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.eraser = false;
      toolbar.stroke = true;
      document.querySelector('li[data-tool="stroke"]').classList.add('active');
    }
  };
  window.addEventListener('keydown', toolKeyPress);
};

export default hotKeys;