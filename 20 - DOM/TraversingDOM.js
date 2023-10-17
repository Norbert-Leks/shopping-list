// Traversing DOM ELEMENTS
// Get child elements
let output;

// const parent = document.querySelector('.parent');

// output = parent.children;

// output = parent.children[1];
// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;

// parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'red';
// parent.children[0].style.color = 'blue';
// parent.children[2].style.color = 'orange';


// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'ChildThree';

// Get Parent elements from a child

// const child = document.querySelector('.child');

// output = child.parentElement;
// child.parentElement.style.border = '1px solid #ccc';
// child.parentElement.style.padding = '10px';

// Sibling elements
// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem;
// output = secondItem.nextElementSibling;

// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'magenta';

// console.log(output);

// Traversing DOM NODES

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[1].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'cyan';

output = parent.firstChild;
output = parent.lastchild;

parent.lastChild.textContent = 'Hello';

// Parent node

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;

console.log(output);