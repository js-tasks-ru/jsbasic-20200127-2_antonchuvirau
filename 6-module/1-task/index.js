/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.render(this.data);
    this.el.addEventListener('click', (event) => this.onClicked(event));
  }
  render(data) {
    this.el.createTHead();
    this.el.createTBody();
    let tableHeader = this.el.querySelector('thead').innerHTML = '<tr></tr>';
    let tableTitles = Object.keys(data[0]);
    //Fill table header
    for (let key of tableTitles) {
      let tableHeaderCell = document.createElement('td');
      tableHeaderCell.textContent = key;
      this.el.querySelector('thead tr').append(tableHeaderCell);
    }
    this.el.querySelector('thead tr').append(document.createElement('td'));
    //Fill table body
    for (let item of data) {
      let tableBodyRow = document.createElement('tr');
      let itemValues = Object.values(item);
      const list = itemValues.map(value => `<td>${value}</td>`).join('');
      tableBodyRow.innerHTML = list + `<td><a>X</a></td>`;
      this.el.querySelector('tbody').append(tableBodyRow);
    }
  }
  onClicked(event) {
    if (event.target.closest('a')) {
      let id = event.target.closest('tr').firstElementChild.textContent;
      event.target.closest('tr').remove();
      this.onRemoved(+id);
    }
  }
  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    return `Из таблицы удален пользователь ${id}`;
  }
}

window.ClearedTable = ClearedTable;
