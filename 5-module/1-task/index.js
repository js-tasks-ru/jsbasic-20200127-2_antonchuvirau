/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tableRows = table.querySelector('tbody').rows;
  for (let tableRow of tableRows) {
    let tableAgeCellElement = tableRow.children[1];
    let tableGenderCellElement = tableRow.children[2];
    let tableStatusCellElement = tableRow.children[3];
    let tableAgeCellContent = tableAgeCellElement.textContent;
    let tableGenderCellContent = tableGenderCellElement.textContent;
    let tableStatusCellAttribute = tableStatusCellElement.dataset.available;
    let tableRowHiddenAttribute = tableRow.getAttribute('hidden');
    if (!tableRowHiddenAttribute) {
      tableRow.setAttribute('hidden', 'hidden');
    }
    if (tableStatusCellAttribute && tableStatusCellAttribute === 'true') {
      tableRow.classList.add('available');
    }
    else if (tableStatusCellAttribute && tableStatusCellAttribute === 'false') {
      tableRow.classList.add('unavailable');
    }
    if (tableGenderCellContent === 'm') {
      tableRow.classList.add('male');
    }
    else if (tableGenderCellContent === 'f') {
      tableRow.classList.add('female');
    }
    if (tableAgeCellContent < 18) {
      tableRow.style.textDecoration = 'line-through';
    }
  }
}
