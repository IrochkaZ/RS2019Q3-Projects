import './src/css/style.css';
import './src/assets/fonts/webfont-montserrat.css';
import Wrapper from './src/js/components/wrapper';
import { getWeather } from './src/js/components/functions';

const wrap = new Wrapper();
wrap.render();

getWeather('Minsk', 'city').then(
  (data) => {
    wrap.weatherMain.changeState = data;
    wrap.map.data = data;
    wrap.weatherMain.change();
    wrap.map.change();
    // global.console.log(data);
  },
);
