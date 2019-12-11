/* eslint-disable no-unused-vars */
import Toolbar from './toolbar';
import Weather from './weather';
import WeatherWeek from './weather-week';
import Search from './search';
import Map from './map';
import { createEl } from './functions';

export default class Wrapper {
  constructor() {
    this.body = document.body;
    this.wrapper = createEl('div', 'wrapper', null, this.body);
    this.toolbar = new Toolbar();
    this.weatherMain = new Weather();
    this.weatherWeek = new WeatherWeek();
    this.search = new Search();
    this.map = new Map();
  }

  render() {
    const leftBlock = createEl('div', 'left__block', null, this.wrapper);
    leftBlock.append(this.toolbar.render());
    leftBlock.append(this.weatherMain.render());
    leftBlock.append(this.weatherWeek.render());

    const rightBlock = createEl('div', 'right__block', null, this.wrapper);
    const searchCont = createEl('div', 'container-search', null, rightBlock);
    searchCont.append(this.search.render());
    rightBlock.append(this.map.render());

    return this.wrapper;
  }
}
