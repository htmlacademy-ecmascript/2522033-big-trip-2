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

  getOffersByType(type) {
    return this.#offers.filter((element)=> element.type === type);
  }
}
