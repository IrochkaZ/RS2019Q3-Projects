export default class Toolbar {
  constructor() {
    this.out = document.createElement('div');
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
    const toolContainer = document.createElement('ul');
    toolContainer.classList.add('operations__button');
    this.out.append(toolContainer);

    // reload option append
    const liReload = document.createElement('li');
    liReload.classList.add('reload');
    toolContainer.append(liReload);
    const iconReload = document.createElement('i');
    iconReload.classList.add('fa', 'fa-fresh', 'fa-spin');
    liReload.append(iconReload);

    // language option append
    const liLang = document.createElement('li');
    liLang.classList.add('language');
    toolContainer.append(liLang);

    const langSelect = document.createElement('select');
    langSelect.classList.add('language-select');
    liLang.append(langSelect);

    this.lang.forEach((lng) => {
      const optLang = document.createElement('option');
      optLang.classList.add(lng.cls);
      optLang.innerText = lng.lang;
      langSelect.append(optLang);
    });

    return this.out;
  }
}
