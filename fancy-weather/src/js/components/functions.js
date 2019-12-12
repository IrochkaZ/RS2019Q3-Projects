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
};
