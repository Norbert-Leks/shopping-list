function removeClearButton(){
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();

}
function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

function removeItem(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

function removeItem2(itemNumber){
    const li = document.querySelectorAll('li');
    li[itemNumber-1].remove();
}

const removeItem3 = (itemNumber) => document.querySelectorAll('li')
[itemNumber -1].remove();


// removeClearButton();
// removeFirstItem();
// removeItem(1);
// removeItem2(1);
// removeItem3(1);