import './src/css/style.css';
import './src/assets/fonts/webfont-montserrat.css';
import Wrapper from './src/js/components/wrapper';
import { getWeather, changeImageBackground } from './src/js/components/functions';

const wrap = new Wrapper();
const wrapper = wrap.render();


changeImageBackground('Minsk').then(
  (data) => {
    wrapper.style.backgroundImage = `url(${data.src})`;
  },
);

getWeather('Minsk', 'city').then(
  (data) => {
    wrap.weatherMain.changeState = data;
    wrap.map.data = data;
    wrap.weatherMain.change();
    wrap.map.change();
  },
);
