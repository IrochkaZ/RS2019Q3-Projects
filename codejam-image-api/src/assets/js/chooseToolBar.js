// import state from './state';

const chooseToolBar = (obj) => {
  const buttons = document.querySelector('.tools__color');

  const toolChoose = ({ target }) => {
    const toolbar = obj.tools;
    const toolEvent = target;

    const activeTool = Object.keys(obj.tools)[Object.values(obj.tools).indexOf(true)];
    document.querySelector(`li[data-tool="${activeTool}"]`).classList.remove('active');

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
