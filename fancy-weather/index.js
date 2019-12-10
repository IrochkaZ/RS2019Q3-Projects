import './src/css/style.css';
import './src/assets/fonts/webfont-montserrat.css';
import Wrapper from './src/js/components/toolbar';

const { body } = document;
body.innerHTML = '';

const wrap = new Wrapper();
// body.append(wrap.render());
global.console.log(wrap.render());
