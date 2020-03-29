import { createEl, changeImageBackground } from './functions';
import Search from './search';

export default class Toolbar {
  constructor() {
    this.toolContainer = createEl('ul', 'operations__button', null, null);
    this.search = new Search();
    this.lang = [
      {
        lang: 'EN',
        cls: 'eng',
      },
      {
        lang: 'RU',
        cls: 'rus',
      },
      {
        lang: 'BE',
        cls: 'be',
      },
    ];
    this.tempa = [{
      tempa: '°F',
      cls: 'button__fahrenheit',
    },
    {
      tempa: '°C',
      cls: 'button__celcius',
    },
    ];
  }

  render() {
    // reload option append
    const reload = createEl('li', 'reload', null, this.toolContainer);
    const reloadIcon = createEl('i', ['fa', 'fa-refresh'], null, reload);
    reloadIcon.setAttribute('aria-hidden', 'true');

    // language option append
    const liLang = createEl('li', 'language', null, this.toolContainer);
    const langSelect = createEl('select', 'language-select', null, liLang);
    this.lang.forEach(({ cls, lang }) => {
      createEl('option', cls, lang, langSelect);
    });
    // temperature select
    const temperatureWrap = createEl('li', 'button__temperature-wrapper', null, this.toolContainer);
    const scaleTemp = createEl('ul', 'button-temperature', null, temperatureWrap);
    this.tempa.forEach(({ cls, tempa }) => {
      createEl('li', cls, tempa, scaleTemp);
    });

    // container search
    const searchContainer = createEl('li', ['container-search', 'mobile-container'], null, this.toolContainer);
    searchContainer.append(this.search.render());
    return this.toolContainer;
  }

  events(el) {
    const { style } = el;
    this.toolContainer.querySelector('.reload').addEventListener('click', () => {
      changeImageBackground(style).then(
        (data) => {
          style.backgroundImage = `url(${data.src})`;
        },
      );
    });
  }
}
