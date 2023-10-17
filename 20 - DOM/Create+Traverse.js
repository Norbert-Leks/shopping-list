// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = '1';
// div.setAttribute('title', 'My Element');

// const text = document.createTextNode('Hello World');
// div.appendChild(text);

// document.body.appendChild(div);
// document.querySelector('ul').appendChild(div);

// Creating List Items

// Quick and Dirty
//  function createListItem(item){
//      const li = document.createElement('li');
//      document.querySelector('.items').appendChild(li);
//      li.innerHTML = `${item}
//      <button class="remove-item btn-link text-red">
//          <i class="fa-solid fa-xmark"></i>
//      </button>`
//      document.querySelector('.items').appendChild(li);
// }
// createListItem('Eggs');

// Clean and Performant #EFFICIENT!
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createNewButton('remove-item btn-link text-red');

    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
}

function createNewButton(classes){
    const button = document.createElement('button');
    button.className = classes;

    const icon = createNewIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}
function createNewIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


createNewItem('Cheese');
createNewItem('Sauce');
