const chooseToolBar = (obj) => {
  const buttons = document.querySelector('.tools__color');

  const toolChoose = ({ target, tools }) => {
    const st = obj;
    const toolbar = tools;
    const toolEvent = target;
    obj.classList.remove('active');

    if (toolEvent.getAttribute('data-tool') === 'pencil') {
      toolbar.pencil = true;
      toolbar.bucket = false;
      toolbar.picker = false;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }

    if (toolEvent.getAttribute('data-tool') === 'bucket') {
      toolbar.pencil = false;
      toolbar.bucket = true;
      toolbar.picker = false;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }

    if (toolEvent.getAttribute('data-tool') === 'picker') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.picker = true;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }
  };

  buttons.addEventListener('click', toolChoose, true);
};


export default chooseToolBar;
