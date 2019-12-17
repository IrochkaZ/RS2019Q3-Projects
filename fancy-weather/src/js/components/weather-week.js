/* eslint-disable dot-notation */
import { createEl } from './functions';

export default class WeatherWeek {
  constructor() {
    this.state = {};
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
    return this.dayFull['en'][date.getUTCDay()];
  }

  render() {
    this.data.forEach((item) => {
      const weatherDayItem = createEl('div', '', null, this.weatherWeekContainer);
      createEl('div', 'day-text', this.getLocaleDay(item.day), weatherDayItem);
      const weatherDayInfo = createEl('div', 'weather-day__info', null, weatherDayItem);
      createEl('div', 'show__temperature', `${item.temp}°`, weatherDayInfo);
      const imgWeather = createEl('img', 'weather-three-day__icon', null, weatherDayInfo);
      imgWeather.src = `https://openweathermap.org/img/wn/${item.icon}@2x.png`;
    });
    return this.weatherWeekContainer;
  }

  change() {
    this.weatherWeekContainer.querySelectorAll('.show__temperature')[0].innerText = this.state[0].temp;
    this.weatherWeekContainer.querySelectorAll('.show__temperature')[1].innerText = this.state[1].temp;
    this.weatherWeekContainer.querySelectorAll('.show__temperature')[2].innerText = this.state[2].temp;
    this.weatherWeekContainer.querySelectorAll('.weather-three-day__icon')[0].src = `https://openweathermap.org/img/wn/${this.state[0].icon}@2x.png`;
    this.weatherWeekContainer.querySelectorAll('.weather-three-day__icon')[1].src = `https://openweathermap.org/img/wn/${this.state[1].icon}@2x.png`;
    this.weatherWeekContainer.querySelectorAll('.weather-three-day__icon')[2].src = `https://openweathermap.org/img/wn/${this.state[2].icon}@2x.png`;
  }
}
