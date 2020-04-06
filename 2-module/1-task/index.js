/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let salariesSum = 0;
    for (let prop in salaries){
        if (typeof salaries[prop] === 'number'){
            salariesSum+=salaries[prop];
        }
        else{
            continue;
        }
    }
    return salariesSum;
}
