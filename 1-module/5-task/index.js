/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
    let strLength = str.length;
    if (strLength > maxlength){
        let trancatedStr = str.slice(0,maxlength-1);
        return trancatedStr + '…';
    }
    else{
        return str;
    }
}
