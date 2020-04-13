/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    if (str){
        let strToArray = str.split('');
        strToArray.forEach((item, index)=>{
            if (item === '-'){
                strToArray[index+1] = strToArray[index+1].toUpperCase();
            }
        });
        return strToArray.join('').replace(/-/g, '');
    }
    else {
        return str;
    }
}
