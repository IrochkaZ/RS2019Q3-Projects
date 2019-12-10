import Toolbar from './toolbar';

export default class Wrapper {
  constructor() {
    this.wrapper = document.createElement('div');
    this.toolbar = new Toolbar();
  }

  render() {
    const leftBlock = document.createElement('div');
    leftBlock.classList.add('left__block');
    this.wrapper.append(leftBlock);

    const rightBlock = document.createElement('div');
    rightBlock.classList.add('right__block');
    this.wrapper.append(rightBlock);

    // leftBlock.append(this.toolbar.render());
    return this.wrapper;
  }
}
