import SortView from '../view/sort-view.js';
import BoardView from '../view/board-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
// import AddNewPointView from '../view/add-new-point-view.js';
import { render } from '../framework/render.js';
import MessageView from '../view/message-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem, sortPointsByPrice, sortPointsByDay, sortPointsByDuration } from '../utils.js';
import { SortType } from '../const.js';

export default class BoardPresenter {
  #listPoint = new BoardView;
  messageComponent = new MessageView;
  pointComponent = new PointView();
  editPointComponent = new EditPointView();
  #pointPresenters = new Map();
  #sortComponent = null;
  #currentSortType = SortType.DEFAULT;

  constructor({ boardContainer, pointsModel }) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = this.pointsModel.getPoints().slice();
    this.#renderSort();
    render(this.#listPoint, this.boardContainer);
    this.#renderPointList();
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#currentSortType = sortType;

    if (sortType === SortType.PRICE) {
      this.points = this.pointsModel.getPoints().slice().sort(sortPointsByPrice);
    }

    if (sortType === SortType.TIME) {
      this.points = this.pointsModel.getPoints().slice().sort(sortPointsByDuration);
    }

    if (sortType === SortType.DEFAULT) {
      this.points = this.pointsModel.getPoints().slice().sort(sortPointsByDay);
    }

    this.#clearPointList();
    this.#renderPointList();
    // - Сортируем задачи
    // - Очищаем список
    // - Рендерим список заново
  };

  #renderSort() {
    this.#sortComponent = new SortView();
    render(this.#sortComponent, this.boardContainer);
    this.#sortComponent.init(this.#handleSortTypeChange);
  }

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.points = updateItem(this.points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #renderPointList() {
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
