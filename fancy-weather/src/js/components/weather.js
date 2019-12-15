import { createEl } from './functions';

export default class Weather {
  constructor() {
    this.date = new Date();
    this.changeState = {};
    this.weatherContainer = createEl('div', 'weather__today', null, null);
    this.dayShort = {
      en: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
      ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      be: ['Няд', 'Пан', 'Аут', 'Сер', 'Чац', 'Пят', 'Суб'],
    };
    this.monthFull = {
      en: ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      ru: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      be: ['Студзеня', 'Лютага', 'Сакавiка', 'Красавiка', 'Мая', 'Чэрвеня', 'Лiпеня', 'Жнiуня', 'Верасня', 'Кастрычнiка', 'Лiстапада', 'Снежня'],
    };
  }

  render() {
    const countryInfo = createEl('div', 'country__info', null, this.weatherContainer);
    createEl('div', 'town', null, countryInfo);
    createEl('div', 'country', null, countryInfo);

    const dateCont = createEl('div', 'date', null, this.weatherContainer);
    createEl('div', 'today', null, dateCont);

    const showData = createEl('div', 'show__data', null, this.weatherContainer);
    createEl('div', 'show__temperature-now', null, showData);
    const description = createEl('div', 'description__weather', null, showData);
    createEl('img', 'weather__icon', null, description);

    const descriptionWeatherInfo = createEl('div', 'description__weather-info', null, description);
    createEl('div', 'summary', null, descriptionWeatherInfo);

    const feelsLike = createEl('div', 'apparent__temperature', null, descriptionWeatherInfo);
    createEl('span', 'description__weather-text', 'Feels like:', feelsLike);
    createEl('span', 'description__weather-temperature', null, feelsLike);

    const wind = createEl('div', 'wind__speed', null, descriptionWeatherInfo);
    createEl('span', 'description__weather-text', 'Wind:', wind);
    createEl('span', 'description__weather-wind', null, wind);

    const humidity = createEl('div', 'humidity', null, descriptionWeatherInfo);
    createEl('span', 'description__weather-text', 'Humidity:', humidity);
    createEl('span', 'description__weather-humidity', null, humidity);

    return this.weatherContainer;
  }

  localDate(tz, lng) {
    const d = this.date;
    let unixDate = Math.round(d.getTime() / 1000);
    unixDate += tz;
    const d2 = new Date(unixDate * 1000);
    const dayWeek = this.dayShort[lng][d2.getUTCDay()];
    const dayMonth = d2.getUTCDate();
    const month = this.monthFull[lng][d2.getMonth()];
    const time = `${d2.getUTCHours()}:${d2.getMinutes()}`;
    return `${dayWeek} ${dayMonth} ${month} ${time}`;
  }

  change() {
    this.weatherContainer.querySelector('.show__temperature-now').innerText = ` ${(parseInt(this.changeState.main.temp, 10) >= 273) ? (parseInt(this.changeState.main.temp, 10) - 273) : -(273 - parseInt(this.changeState.main.temp, 10))}°`;
    this.weatherContainer.querySelector('.town').innerText = this.changeState.name;
    this.weatherContainer.querySelector('.country').innerText = this.changeState.sys.country;
    this.weatherContainer.querySelector('.today').innerText = this.localDate(this.changeState.timezone, 'en');
    this.weatherContainer.querySelector('.summary').innerText = this.changeState.weather[0].main;
    this.weatherContainer.querySelector('.description__weather-temperature').innerText = ` ${(parseInt(this.changeState.main.feels_like, 10) >= 273) ? (parseInt(this.changeState.main.feels_like, 10) - 273) : -(273 - parseInt(this.changeState.main.feels_like, 10))} °`;
    this.weatherContainer.querySelector('.description__weather-wind').innerText = ` ${this.changeState.wind.speed} m/s`;
    this.weatherContainer.querySelector('.description__weather-humidity').innerText = ` ${this.changeState.main.humidity} %`;
    this.weatherContainer.querySelector('.weather__icon').src = `http://openweathermap.org/img/wn/${this.changeState.weather[0].icon}@2x.png`;
  }
}
