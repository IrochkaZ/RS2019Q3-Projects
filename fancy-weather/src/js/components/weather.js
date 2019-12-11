import { createEl } from './functions';
import weatherImg from '../../assets/img/animated/cloudy-day-3.svg';

export default class Weather {
  constructor() {
    this.weatherContainer = createEl('div', 'weather__today', null, null);
  }

  render() {
    const countryInfo = createEl('div', 'country__info', null, this.weatherContainer);
    createEl('div', 'town', 'Minsk,', countryInfo);
    createEl('div', 'country', 'Belarus', countryInfo);

    const dateCont = createEl('div', 'date', null, this.weatherContainer);
    createEl('div', 'today', 'Today day', dateCont);
    createEl('div', 'time', 'Time now', dateCont);

    const showData = createEl('div', 'show__data', null, this.weatherContainer);
    createEl('div', 'show__temperature-now', '-10°', showData);
    const description = createEl('div', 'description__weather', null, showData);
    const imgWeather = createEl('img', 'weather__icon', null, description);
    imgWeather.src = weatherImg;

    const descriptionWeatherInfo = createEl('div', 'description__weather-info', null, description);
    createEl('div', 'summary', 'overcast', descriptionWeatherInfo);

    const feelsLike = createEl('div', 'apparent__temperature', null, descriptionWeatherInfo);
    createEl('span', 'description__weather-text', 'Feels like:', feelsLike);
    createEl('span', 'description__weather-temperature', '7°', feelsLike);

    const wind = createEl('div', 'wind__speed', null, descriptionWeatherInfo);
    createEl('span', 'description__weather-text', 'Wind:', wind);
    createEl('span', 'description__weather-wind', '2 m/s', wind);

    const humidity = createEl('div', 'humidity', null, descriptionWeatherInfo);
    createEl('span', 'description__weather-text', 'Humidity:', humidity);
    createEl('span', 'description__weather-humidity', '83%', humidity);

    return this.weatherContainer;
  }
}
