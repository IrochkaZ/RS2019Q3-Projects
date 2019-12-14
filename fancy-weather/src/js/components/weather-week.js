import { createEl } from './functions';

export default class WeatherWeek {
  constructor() {
    this.weatherWeekContainer = createEl('div', 'weather-three-day', null, null);
    this.dayFull = {
      en: ['Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      ru: ['Понедебник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      be: ['Панядзелак', 'Ауторак', 'Серада', 'Чацверг', 'Пятнiца', 'Субота', 'Нядзеля'],
    };
    this.data = [
      { day: 'Tuesday', temp: '7°', icon: null },
      { day: 'Wednesday', temp: '7°', icon: null },
      { day: 'Wednesday', temp: '7°', icon: null },
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
