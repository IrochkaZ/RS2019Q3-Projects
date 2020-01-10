module.exports = {
  createEl: (tag, cls, innerText = null, appendTo = null) => {
    const el = document.createElement(tag);
    if (cls) {
      if (Array.isArray(cls)) {
        el.classList.add(...cls);
      } else {
        el.classList.add(cls);
      }
    }
    if (innerText) {
      el.innerText = innerText;
    }
    if (appendTo) {
      appendTo.append(el);
    }
    return el;
  },

  getWeather: async (query, type) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const key = '678c9b8a8410be1560b31076e2fb16c5';
    const addUrl = (type === 'city') ? `?q=${query}` : `?lat=${query.lat}&lon=${query.lon}`;
    let data = '';
    try {
      const request = await fetch(`${url}${addUrl}&appid=${key}`);
      if (!request.ok) throw new Error(request.statusText);
      data = await request.json();
    } catch (e) {
      global.alert(e);
    }
    return data;
  },

  getWeatherWeek: async (cityId) => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast';
    const key = '678c9b8a8410be1560b31076e2fb16c5';
    const addUrl = `?id=${cityId}&cnt=25`;
    let weatherThreeDays = '';
    try {
      const request = await fetch(`${url}${addUrl}&appid=${key}`);
      if (!request.ok) throw new Error(request.statusText);
      const { list } = await request.json();
      const weatherSecondDay = list[8];
      const weatherThirdDay = list[16];
      const weatherFourthDay = list[24];
      const threeDays = [weatherSecondDay, weatherThirdDay, weatherFourthDay];
      weatherThreeDays = threeDays.map(({ dt, main, weather }) => ({
        day: dt,
        temp: Math.round(main.temp - 273),
        icon: weather[0].icon,
      }));
    } catch (e) {
      global.alert(e);
    }
    return weatherThreeDays;
  },

  changeImageBackground: async (query) => {
    const urlImage = 'https://api.unsplash.com/photos/random';
    const key = 'bf0b1c1798a22465f9c79198b7c271894fccc257c52e80db9e2b515160a5e038';
    const link = `${urlImage}?query=${query}&client_id=${key}`;
    const response = await fetch(link);
    const data = await response.json();
    const image = new Image();
    const { urls } = data;
    image.src = urls.full;
    image.setAttribute('crossOrigin', '');
    return image;
  },

  getLocation: async () => {
    const url = 'https://freegeoip.app/json/';
    let location = '';
    try {
      const response = await fetch(url);
      location = await response.json();
    } catch (e) {
      global.alert(e);
    }
    return location;
  },

  // eslint-disable-next-line arrow-body-style
  celciusTofahrenheit: (temp) => {
    return Math.round((9 / 5) * temp + 32);
  },

};
