const chooseToolBar = (obj) => {
  const buttons = document.querySelector('.tools__list');

  const toolChoose = ({ target, tools }) => {
    const st = obj;
    const toolbar = tools;
    const toolEvent = target;
    obj.classList.remove('active');

    if (toolEvent.getAttribute('data-tool') === 'pencil') {
      toolbar.pencil = true;
      toolbar.bucket = false;
      toolbar.picker = false;
      toolbar.stroke = false;
      toolbar.eraser = false;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }

    if (toolEvent.getAttribute('data-tool') === 'bucket') {
      toolbar.pencil = false;
      toolbar.bucket = true;
      toolbar.picker = false;
      toolbar.stroke = false;
      toolbar.eraser = false;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }

    if (toolEvent.getAttribute('data-tool') === 'picker') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.picker = true;
      toolbar.stroke = false;
      toolbar.eraser = false;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }
    if (toolEvent.getAttribute('data-tool') === 'eraser') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.picker = false;
      toolbar.eraser = true;
      toolbar.stroke = false;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }
    if (toolEvent.getAttribute('data-tool') === 'stroke') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.picker = false;
      toolbar.eraser = false;
      toolbar.stroke = true;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }
  };

  buttons.addEventListener('click', toolChoose, true);
};


export default chooseToolBar;
