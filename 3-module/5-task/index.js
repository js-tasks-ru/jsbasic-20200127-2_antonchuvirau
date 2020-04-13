/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let filteredArray = arr.filter(item=>item >= a && item <= b);
  return filteredArray;
}
