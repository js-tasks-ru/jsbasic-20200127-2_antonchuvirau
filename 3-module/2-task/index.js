/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let result = {};
    let strToArray = str.replace(/,/g, ' ').replace(/\s/g, ' ').split(' ');
    let strToNumbersArray = strToArray.filter((item)=>{
        if (+item){
            return +item;
        }
    });
    result.max = Math.max(...strToNumbersArray);
    result.min = Math.min(...strToNumbersArray);
    return result;
}
