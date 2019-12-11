import { createEl } from './functions';

export default class Toolbar {
  constructor() {
    this.out = createEl('div');
    this.lang = [
      {
        lang: 'en',
        cls: 'eng',
      },
      {
        lang: 'ru',
        cls: 'russ',
      },
      {
        lang: 'be',
        cls: 'be',
      },
    ];
  }

  render() {
    const toolContainer = createEl('ul', 'operations__button', null, this.out);

    // reload option append
    const liReload = createEl('li', 'reload', null, toolContainer);
    createEl('i', ['fa', 'fa-fresh', 'fa-spin'], null, liReload);

    // language option append
    const liLang = createEl('li', 'language', null, toolContainer);
    const langSelect = createEl('select', 'language-select', null, liLang);
    this.lang.forEach((lng) => createEl('option', lng.cls, lng.lang, langSelect));
    global.console.log(this.out);
    return this.out;
  }
}
