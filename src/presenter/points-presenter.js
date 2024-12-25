import {render, RenderPosition} from '../render';
import InfoView from '../view/information';
import FilterView from '../view/filter';
import SortView from '../view/sort';
import PointListView from '../view/points-list';
import PointView from '../view/point';
// import FormAddView from '../view/form-add';
import FormEditView from '../view/form-edit';

const COUNT_POINTS = 3;

export default class PointPresenter {
  pointListComponent = new PointListView();

  constructor({header, controls, main, destinationModel, offerModel, pointModel}) {
    this.header = header;
    this.controls = controls;
    this.main = main;
    this.destinationModel = destinationModel;
    this.offerModel = offerModel;
    this.pointModel = pointModel;
  }

  //инициализация презентера
  init() {
    this.pointModel.init();
    this.offerModel.init();
    this.destinationModel.init();
    this.points = [...this.pointModel.getPoints()];
    render(new InfoView(), this.header, RenderPosition.AFTERBEGIN);
    render(new FilterView(), this.controls);
    render(new SortView(), this.main);
    render(this.pointListComponent, this.main);
    render(new FormEditView(), this.pointListComponent.getElement());


    this.points.forEach((point) => render (new PointView({destination:this.destinationModel.getDestinationById(point.id),
      offer:this.offerModel.getOffersByType(point.type),point}), this.pointListComponent.getElement()));

    // render(new FormAddView(), this.pointListComponent.getElement());
  }
}
