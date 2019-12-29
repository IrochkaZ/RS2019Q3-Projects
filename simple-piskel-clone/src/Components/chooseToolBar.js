import pen from '../assets/img/pencil.png';

document.querySelector('.tools__pencil').style.backgroundImage = `url(${pen})`;

const chooseToolBar = (obj) => {
  const buttons = document.querySelector('.tools__list');
  const toolbar = obj.tools;
  const toolChoose = ({ target }) => {
    const st = obj;
    const toolEvent = target;
    st.domToolActive.classList.remove('active');

    if (toolEvent.getAttribute('data-tool') === 'pencil') {
      toolbar.pencil = true;
      toolbar.bucket = false;
      toolbar.stroke = false;
      toolbar.eraser = false;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }

    if (toolEvent.getAttribute('data-tool') === 'bucket') {
      toolbar.pencil = false;
      toolbar.bucket = true;
      toolbar.stroke = false;
      toolbar.eraser = false;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }
    if (toolEvent.getAttribute('data-tool') === 'eraser') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.eraser = true;
      toolbar.stroke = false;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }
    if (toolEvent.getAttribute('data-tool') === 'stroke') {
      toolbar.pencil = false;
      toolbar.bucket = false;
      toolbar.eraser = false;
      toolbar.stroke = true;
      toolEvent.classList.add('active');
      st.domToolActive = toolEvent;
    }
    global.console.log(toolbar);
  };

  buttons.addEventListener('click', toolChoose, false);
};


export default chooseToolBar;
