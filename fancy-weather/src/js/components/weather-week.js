import { createEl } from './functions';
import weatherImg from '../../assets/img/animated/rainy-1.svg';

export default class WeatherWeek {
  constructor() {
    this.weatherWeekContainer = createEl('div', 'weather-three-day', null, null);
    this.data = [
      { day: 'Tuesday', temp: '7°', icon: weatherImg },
      { day: 'Wednesday', temp: '7°', icon: weatherImg },
      { day: 'Wednesday', temp: '7°', icon: weatherImg },
    ];
  }

  render() {
    this.data.forEach((item) => {
      const weatherDayItem = createEl('div', '', null, this.weatherWeekContainer);
      createEl('div', 'day-text', item.day, weatherDayItem);
      const weatherDayInfo = createEl('div', 'weather-day__info', null, weatherDayItem);
      createEl('div', 'show__temperature', item.temp, weatherDayInfo);
      const imgWeather = createEl('img', 'weather-three-day__icon', null, weatherDayInfo);
      imgWeather.src = item.icon;
    });

    return this.weatherWeekContainer;
  }
}
