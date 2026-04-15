import SortView from '../view/sort-view.js';
import BoardView from '../view/board-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
// import AddNewPointView from '../view/add-new-point-view.js';
import { render, replace } from '../framework/render.js';
import MessageView from '../view/message-view.js';

export default class BoardPresenter {
  messageComponent = new MessageView;

  constructor({ boardContainer, pointsModel }) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  #renderPoint(point) {
    const destination = this.pointsModel.getDestinationById(point.destination);
    const offers = this.pointsModel.getOffersByType(point.type).offers.filter((offer) => point.offers.includes(offer.id));
    const allDestinations = this.pointsModel.getDestinations().map((item) => item.name);
    const allTypes = this.pointsModel.getOffers().map((item) => item.type);
    const offersByType = this.pointsModel.getOffersByType(point.type).offers;

    const pointComponent = new PointView(point, destination, offers);
    pointComponent.init({
      onEditClick: () => {
        replacePointToForm();
      }
    });
    const pointEditComponent = new EditPointView(point, destination, allDestinations, allTypes, offersByType);
    pointEditComponent.init({
      oneCancelClick: () => {
        replaceFormToPoint();
      }
    });

    render(pointComponent, this.boardComponent.element);
    // render(pointEditComponent, this.boardComponent.element);

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
      }
    };


    function replacePointToForm() {
      replace(pointEditComponent, pointComponent);
      document.addEventListener('keydown', onEscKeyDown);
    }

    function replaceFormToPoint() {
      replace(pointComponent, pointEditComponent);
      document.removeEventListener('keydown', onEscKeyDown);
    }
  }

  boardComponent = new BoardView();
  init() {
    this.points = this.pointsModel.getPoints().slice();
    render(new SortView(), this.boardContainer);
    render(this.boardComponent, this.boardContainer);
    // render(new AddNewPointView(), listElement);

    if (this.points.length === 0) {
      render(this.messageComponent, this.boardContainer);
    } else {
      for (let i = 0; i < this.points.length; i++) {
        this.#renderPoint(this.points[i]);
      }
    }
  }
}
