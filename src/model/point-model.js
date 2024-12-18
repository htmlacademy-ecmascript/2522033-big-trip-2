import { getRandomPoints } from '../mock/points';

export default class PointModel {
  #points = [];

  //инициализация тестовых данных
  init() {
    this.#points = getRandomPoints();
  }

  //получить массив точек маршрута
  getPoints() {
    return this.#points;
  }
}
