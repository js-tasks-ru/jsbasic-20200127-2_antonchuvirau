/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    let strToLowerCase = str.toLowerCase();
    let firstSubStrToLowerCase = '1xBet'.toLowerCase();
    let secondSubStrToLowerCase = 'XXX'.toLowerCase();
    if (strToLowerCase.includes(firstSubStrToLowerCase) || strToLowerCase.includes(secondSubStrToLowerCase)){
        return true;
    }
    else{
        return false;
    }
}
