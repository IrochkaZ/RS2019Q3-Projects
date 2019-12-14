import './src/css/style.css';
import './src/assets/fonts/webfont-montserrat.css';
import Wrapper from './src/js/components/wrapper';
import { getWeather, getWeatherWeek, changeImageBackground } from './src/js/components/functions';

const wrap = new Wrapper();

getWeather('new york', 'city').then(
  (data) => {
    getWeatherWeek(data.id).then((dataWeek) => {
      wrap.weatherWeek.data = dataWeek;
      const wrapper = wrap.render();

      changeImageBackground('december').then(
        (dataImg) => {
          wrapper.style.backgroundImage = `url(${dataImg.src})`;
        },
      );

      wrap.weatherMain.changeState = data;
      wrap.map.data = data;
      wrap.weatherMain.change();
      wrap.map.change();
    });
  },
);
