import { createEl } from './functions';

export default class Search {
  constructor() {
    this.searchForm = createEl('form', 'search-form', null, null);
  }

  render() {
    const cityInput = createEl('input', 'city-input', null, this.searchForm);
    cityInput.setAttribute('type', 'text');
    cityInput.placeholder = 'Search city or ZIP';
    cityInput.accept = 'audio/*;capture=microphone';
    cityInput.autofocus = true;

    const citySubmit = createEl('input', 'submit', null, this.searchForm);
    citySubmit.setAttribute('type', 'submit');
    citySubmit.value = 'Search';

    return this.searchForm;
  }
}
