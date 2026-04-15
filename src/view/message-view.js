import AbstractView from '../framework/view/abstract-view';

function createMessageTemplate(text = 'Click New Event to create your first poin') {
  return `
    <p class="trip-events__msg">${text}</p>
  `;
}

export default class MessageView extends AbstractView {
  get template() {
    return createMessageTemplate();
  }
}
