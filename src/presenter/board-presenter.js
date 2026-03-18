import SortView from '../view/sort-view.js';
import BoardView from '../view/board-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
// import AddNewPointView from '../view/add-new-point-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = this.pointsModel.getPoints().slice();
    render(new SortView(), this.boardContainer);
    render(this.boardComponent, this.boardContainer);
    const listElement = this.boardComponent.getElement();
    // render(new AddNewPointView(), listElement);

    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];
      const destination = this.pointsModel.getDestinationById(point.destination);
      const offers = this.pointsModel.getOffersByType(point.type).offers.filter((offer) => point.offers.includes(offer.id));
      const allDestinations = this.pointsModel.getDestinations().map((item) => item.name);
      const allTypes = this.pointsModel.getOffers().map((item) => item.type);
      const offersByType = this.pointsModel.getOffersByType(point.type).offers;

      render(new PointView(point, destination, offers), listElement);
      render(new EditPointView(point, destination, allDestinations, allTypes, offersByType), listElement);
    }
  }
}
