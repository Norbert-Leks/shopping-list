// console.log(document.links[0]);

// console.log(document.getElementById('main'));
// const main = document.getElementById('main');

// document.querySelector('#main h1').innerText = 'Hello World';


let ouptut; 

ouptut = document.all;
ouptut = document.all[11];
ouptut = document.all.length;

ouptut = document.documentElement;

ouptut = document.head;
ouptut = document.body;

output = document.head.children;
output = document.body.children;

// Document 
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.cotentTpe;

// Looking at forms
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// document.ofrms[0].id = 'new-id';

// Collecting Links
output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].id = 'google-link';

// Collecting images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Converting HTML forms to array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

// Sellecting single elements within a DOM
document.getElementById()
// console.log((document.getElementById('app-title').getAttribute('id')));

// Set attributes
document.getElementById('app-title').title = 'Shopping';
document.getElementById('app-title').setAttribute('class','title');
const title = document.getElementById('app-title');

// Get/change content
// console.log(title.textContent);
title.textContent = 'HelloWorld';
title.innerText = 'HelloAgai';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.color.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector();
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)'));

const secondItem = document.querySelector('li_nth-child(2)');

secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these method on other elements
const list = document.querySelector('ul');
const firstItem = list.querySelector('ul');
firstItem.style.color = 'blue';




// console.log(output);




