import './src/css/style.css';
import './src/assets/fonts/webfont-montserrat.css';
import Wrapper from './src/js/components/wrapper';
import {
  getWeather, getWeatherWeek, changeImageBackground, getLocation,
} from './src/js/components/functions';

const wrap = new Wrapper();

getLocation().then(
  ({ city }) => {
    wrap.search.query = city;
    const query = (city) ? 'Minsk' : city;
    getWeather(query, 'city').then(
      (data) => {
        getWeatherWeek(data.id).then((dataWeek) => {
          wrap.weatherWeek.data = dataWeek;
          const wrapper = wrap.render();
          changeImageBackground(data.weather[0].description).then(
            ({ src }) => {
              wrapper.style.backgroundImage = `url(${src})`;
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
  const { target } = e;
  if (target.classList.contains('submit')) {
    const { searchForm } = wrap.search;
    if (searchForm[0].value !== '') {
      getWeather(wrap.search.searchForm[0].value, 'city').then(
        (data) => {
          getWeatherWeek(data.id).then((dataWeek) => {
            wrap.weatherWeek.state = dataWeek;
            wrap.weatherMain.changeState = data;
            wrap.map.data = data;
            wrap.weatherMain.change();
            wrap.map.change();
            wrap.weatherWeek.change();
          });
        },
      );
    } else {
      global.alert('Please input city to check weather');
    }
  }
});
