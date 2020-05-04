/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
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
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  let tableHeaderValues = Object.keys(items[0]);
  function fillTable(element, data) {
    element.innerHTML = '';
    element.createTHead();
    element.createTBody();
    element.querySelector('thead').append(document.createElement('tr'));
    //Get object keys
    for (let key of tableHeaderValues) {
      let tableHeaderCell = document.createElement('td');
      tableHeaderCell.textContent = key;
      element.querySelector('thead tr').append(tableHeaderCell);
    }
    for (let item of data) {
      let tableRow = document.createElement('tr');
      //Get object values
      let itemValues = Object.values(item);
      for (let value of itemValues) {
        let tableBodyCell = document.createElement('td');
        tableBodyCell.textContent = value;
        tableRow.append(tableBodyCell);
      }
      element.querySelector('tbody').append(tableRow);
    }
  }
  fillTable(this.el, items);
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    function compare (a, b) {
      if (+a[tableHeaderValues[column]]) {
        if (desc) {
          return b[tableHeaderValues[column]] - a[tableHeaderValues[column]];
        }
        else {
          return a[tableHeaderValues[column]] - b[tableHeaderValues[column]];
        }
      }
      else {
        if (a[tableHeaderValues[0]] > b[tableHeaderValues[0]]) {
          if (desc) {
            return -1;
          }
          else {
            return 1;
          }
        }
        if (a[tableHeaderValues[0]] < b[tableHeaderValues[0]]) {
          if (desc) {
            return 1;
          }
          else {
            return -1;
          }
        }
        return 0;
      }
    }
    let sortedData = items.sort(compare);
    fillTable(this.el, sortedData);
  };
}
