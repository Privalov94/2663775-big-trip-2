import { offers } from '../data/offers.js';
import { points } from '../data/points.js';
import { destinations } from '../data/destinations.js';


export default class PointsModel {
  points = [];
  offers = [];
  destinations = [];

  constructor() {
    this.points = points;
    this.offers = offers;
    this.destinations = destinations;
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getDestinationById(id) {
    return this.destinations.find((item) => item.id === id);
  }

  getDestinationByName(name) {
    return this.destinations.find((item) => item.name === name);
  }

  getOffersByType(type) {
    return this.offers.find((item) => item.type === type);
  }
}
