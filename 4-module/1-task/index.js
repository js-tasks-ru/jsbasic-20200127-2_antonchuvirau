/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let friendsListHtmlElement = document.createElement('ul');
    for (let friend of friends){
        let friendHtmlElement = document.createElement('li');
        friendHtmlElement.innerHTML = friend.firstName + ' ' + friend.lastName;
        friendsListHtmlElement.append(friendHtmlElement);
    }
    return friendsListHtmlElement;
}
