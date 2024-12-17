import { getDestinations } from '../mock/destinations';

export default class DestinationModel {
  #destinations = [];

  //инициализация тестовых данных
  init() {
    this.#destinations = getDestinations();
  }

  //получить массив пунктов назначения
  getDestinations() {
    return this.#destinations;
  }
}
