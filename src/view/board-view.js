// import {createElement} from '../render.js';
import AbstractView from '../framework/view/abstract-view.js';

function createBoardTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class BoardView extends AbstractView {
  get template() {
    return createBoardTemplate();
  }

  // getElement() {
  //   if (!this.element) {
  //     this.element = createElement(this.getTemplate());
  //   }
  //   return this.element;
  // }

  // removeElement() {
  //   this.element = null;
  // }
}
