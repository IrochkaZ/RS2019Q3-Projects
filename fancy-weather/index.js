import './src/css/style.css';
import './src/assets/fonts/webfont-montserrat.css';
import Wrapper from './src/js/components/wrapper';
import {
  getWeather, getWeatherWeek, changeImageBackground, getLocation,
} from './src/js/components/functions';

const wrap = new Wrapper();

getLocation().then(
  (dataLocation) => {
    wrap.search.query = dataLocation.region_name;
    let query;
    if (dataLocation.region_name === '') {
      query = 'Minsk';
    } else {
      query = dataLocation.region_name;
    }
    global.console.log(dataLocation);
    getWeather(query, 'city').then(
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
  },
);

wrap.search.searchForm.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('submit')) {
    const inputValue = document.querySelector('.city-input').value;
    if (inputValue !== '') {
      global.console.log('weather async func should be here');
    } else {
      global.alert('Please input city to check weather');
    }
  }
  global.console.log('submitted');
});
