import { getDestinations } from '../mock/destinations';
import { getOffers } from '../mock/offers';


export default class DestinationsAndOffersModel {
  #offers = [];
  #destinations = [];

  //инициализация тестовых данных
  init() {
    this.#offers = getOffers();
    this.#destinations = getDestinations();
  }

  //получить массив дополнительных предложений
  getOffers() {
    return this.#offers;
  }

  //получить массив пунктов назначения
  getDestinations() {
    return this.#destinations;
  }
}
