// import { DEFAULT_LISTEN_ADDR } from "karma/lib/constants";

/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    let strFirstChar = str[0];
    if (strFirstChar === undefined){
        return str;
    }
    else if (str.length === 1){
        return str.toUpperCase();
    }
    else{
        let strWithoutFirstChar = str.slice(1);
        return str[0].toUpperCase() + strWithoutFirstChar;
    }
}
