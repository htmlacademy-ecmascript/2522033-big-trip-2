import { getOffers } from '../mock/offers';

export default class OfferModel {
  #offers = [];

  //инициализация тестовых данных
  init() {
    this.#offers = getOffers();
  }

  //получить массив дополнительных предложений
  getOffers() {
    return this.#offers;
  }
}
