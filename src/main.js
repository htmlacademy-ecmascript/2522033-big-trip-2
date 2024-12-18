import PointModel from './model/point-model.js';
import PointPresenter from './presenter/points-presenter.js';
import DestinationModel from './model/destination-model.js';
import OfferModel from './model/offer-model.js';


const pageHeader = document.querySelector('.page-header');
const tripMain = pageHeader.querySelector('.trip-main');
const tripControls = pageHeader.querySelector('.trip-controls__filters');
const pageMain = document.querySelector('.page-main');
const tripEvents = pageMain.querySelector('.trip-events');


const destinationModel = new DestinationModel();
const offerModel = new OfferModel();
const pointModel = new PointModel();
const presenter = new PointPresenter ({header:tripMain,controls:tripControls,main:tripEvents,pointModel,destinationModel,offerModel});

presenter.init();

