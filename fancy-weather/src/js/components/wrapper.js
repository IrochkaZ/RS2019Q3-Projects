/* eslint-disable no-unused-vars */
import Toolbar from './toolbar';
import { createEl } from './functions';

export default class Wrapper {
  constructor() {
    this.wrapper = createEl('div', 'wrapper', null, null);
  }

  render() {
    const leftBlock = createEl('div', 'left__block', null, this.wrapper);
    const rightBlock = createEl('div', 'right__block', null, this.wrapper);
    return this.wrapper;
  }
}
