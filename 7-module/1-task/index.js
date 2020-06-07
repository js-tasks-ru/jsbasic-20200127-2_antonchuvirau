/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

function promiseClick(button) {
  return new Promise(function(resolve, reject) {
    button.addEventListener('click', (event) => {
      resolve(event);
      reject(new Error('Ошибка выполнения'));
    }, {once: true});
  });
}
