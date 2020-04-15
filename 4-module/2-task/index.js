/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let tableRows = table.rows;
    let defaultCellIndex = 0;
    for (let tableRow of tableRows){
        let tableRowCells = tableRow.cells;
        tableRowCells[defaultCellIndex].style.backgroundColor = 'red';
        defaultCellIndex++;
    }
}
