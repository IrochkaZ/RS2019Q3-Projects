/* eslint-disable dot-notation */
import { createEl } from './functions';

export default class WeatherWeek {
  constructor() {
    this.weatherWeekContainer = createEl('div', 'weather-three-day', null, null);
    this.dayFull = {
      en: ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday'],
      ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      be: ['Нядзеля', 'Панядзелак', 'Ауторак', 'Серада', 'Чацверг', 'Пятнiца', 'Субота'],
    };
    this.data = [
      { day: 'null', temp: 'null', icon: null },
      { day: 'null', temp: 'null', icon: null },
      { day: 'null', temp: 'null', icon: null },
    ];
  }

  getLocaleDay(time) {
    const date = new Date(time * 1000);
    return this.dayFull['en'][date.getDay()];
  }

  render() {
    this.data.forEach((item) => {
      const weatherDayItem = createEl('div', '', null, this.weatherWeekContainer);
      createEl('div', 'day-text', this.getLocaleDay(item.day), weatherDayItem);
      const weatherDayInfo = createEl('div', 'weather-day__info', null, weatherDayItem);
      createEl('div', 'show__temperature', `${item.temp}°`, weatherDayInfo);
      const imgWeather = createEl('img', 'weather-three-day__icon', null, weatherDayInfo);
      imgWeather.src = `http://openweathermap.org/img/wn/${item.icon}@2x.png`;
    });

    return this.weatherWeekContainer;
  }
}
