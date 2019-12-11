import './src/css/style.css';
import './src/assets/fonts/webfont-montserrat.css';
import Wrapper from './src/js/components/wrapper';

const { body } = document;
body.innerHTML = '';

const wrap = new Wrapper();
global.console.log(wrap.render());
