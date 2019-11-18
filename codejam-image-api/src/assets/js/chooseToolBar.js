const chooseToolBar = (obj) => {
  const buttons = document.querySelector('.tools__color');

  const toolChoose = (e) => {
    const toolbar = obj.tools;
    const toolEvent = e.target;

    [].forEach.call(buttons.children, (button) => {
      button.classList.remove('active');
    });

    if (toolEvent.getAttribute('data-tool') === 'pencil') {
      toolbar.pencil = true;
      toolbar.bucket = false;
      toolbar.picker = false;
      toolEvent.classList.add('active');
    }

    if (toolEvent.getAttribute('data-tool') === 'bucket') {
      toolbar.pencil = false;
      toolbar.bucket = true;
      toolbar.picker = false;
      toolEvent.classList.add('active');
    }

    if (toolEvent.getAttribute('data-tool') === 'picker') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.picker = true;
      toolEvent.classList.add('active');
    }
  };

  buttons.addEventListener('click', toolChoose);
};


export default chooseToolBar;
