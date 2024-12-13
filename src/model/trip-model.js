import { getRandomPoints } from '../mock/points';

export default class TripModel {
  #points = [];

  //инициализация тестовых данных
  init() {
    this.#points = getRandomPoints();
  }

  //получить массив точек маршрута
  getPoints() {
    return this.#points;
  }
