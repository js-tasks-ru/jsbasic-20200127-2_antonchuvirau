/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let tableRows = table.rows;
    let defaultCellIndex = 0;
    for (let tableRow of tableRows){
        let tableCellsElements = tableRow.cells;
        tableCellsElements[defaultCellIndex].style.backgroundColor = 'red';
        defaultCellIndex+=1;
    }
}
