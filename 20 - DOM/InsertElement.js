// insertAdjacentElement Example
function insertElement() {
    const filter = document.querySelector('.items');
    const h1 = document.createElement('h1');
    h1.textContent = 'Shopping List';

    filter.insertAdjacentElement('beforebegin',h1);
};
insertElement();
// insertAdjacentText Example
function insertText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('afterend', 'Banana');

};
insertText();
// insertAdjacentHTML Example
function insertHTML(){
    const clearBtn = document.querySelector('.items');

    clearBtn.insertAdjacentHTML('afterend', 'Grapes');

};
insertHTML();
// InsertBefore Examples
function insertBeforeItem(){
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';
    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}
