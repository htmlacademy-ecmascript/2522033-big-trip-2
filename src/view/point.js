import {createElement} from '../render.js';
import {convertDate} from '../utils.js';
import {DateFormat} from '../const.js';


function generateOffersMarkup({offers}){
  let markup = '';

  offers.forEach((offer) => {
    markup += (`<li class="event__offer">
    <span class="event__offer-title">${offer.title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.price}</span>
  </li>`);
  });

  return markup;
}

//Шаблон для точки маршрута
function createPointViewTemplate(destination,offer,point) {
  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${point.dateFrom}">${convertDate(point.dateFrom, DateFormat.MONTH_DAY)}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${point.type} ${destination?.name || ''}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
          </p>
          <p class="event__duration">30M</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${point.basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
        ${generateOffersMarkup(offer)}
        </ul>
        <button class="event__favorite-btn event__favorite-btn--active" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
}


//Класс для взаимодействия с точкой маршрута
export default class PointView {
  getTemplate() {
    return createPointViewTemplate(this.destination,this.offer,this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  constructor ({destination, offer, point}){
    this.destination = destination;
    this.offer = offer;
    this.point = point;
  }

  removeElement() {
    this.element = null;
  }
}
