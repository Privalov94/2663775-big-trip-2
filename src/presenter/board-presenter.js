import SortView from '../view/sort-view.js';
import BoardView from '../view/board-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
// import AddNewPointView from '../view/add-new-point-view.js';
import { render } from '../framework/render.js';
import MessageView from '../view/message-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils.js';

export default class BoardPresenter {
  #listPoint = new BoardView;
  messageComponent = new MessageView;
  pointComponent = new PointView();
  editPointComponent = new EditPointView();
  #pointPresenters = new Map();


  constructor({ boardContainer, pointsModel }) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = this.pointsModel.getPoints().slice();
    render(new SortView(), this.boardContainer);
    this.#renderPointList();
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.points = updateItem(this.points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #renderPointList() {
    render(this.#listPoint, this.boardContainer);
    // render(new AddNewPointView(), listElement);

    if (this.points.length === 0) {
      render(this.messageComponent, this.boardContainer);
    } else {
      for (let i = 0; i < this.points.length; i++) {
        this.#renderPoint(this.points[i]);
      }
    }
  }

  #clearPointList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      point,
      pointsModel: this.pointsModel,
      listPoint: this.#listPoint,
      handlePointChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }
}
