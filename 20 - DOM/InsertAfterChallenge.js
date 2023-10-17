// Our custom function 
function insertAfter(newEL, existingEL){
    existingEL.parentElement.insertBefore(newEL,existingEL.nextSibling);

};
//New element to insert
const li = document.createElement('li');
li.tetContext = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

insertAfter(li, firstItem);

