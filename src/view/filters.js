export default class Filters {
  constructor() {
    this.element = this.render();
  }

  render() {
    const filtersContainer = document.createElement('div');
    filtersContainer.classList.add('filters');
    filtersContainer.innerHTML = `
      <label for="filter-price">Цена:</label>
      <select id="filter-price">
        <option value="">Все</option>
        <option value="low">Низкая</option>
        <option value="high">Высокая</option>
      </select>
      <label for="filter-category">Категория:</label>
      <select id="filter-category">
        <option value="">Все</option>
        <option value="electronics">Электроника</option>
        <option value="clothes">Одежда</option>
        <option value="books">Книги</option>
      </select>
    `;
    return filtersContainer;
  }
}
