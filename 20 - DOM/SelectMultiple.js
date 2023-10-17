// querySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems);

listItems[0].style.color = 'red';

// listItems.forEach((item, index) => {
//     item.style.color = 'blue';

//     if(index === 1){
//         item.remove();
    
//     }
//     if(index === 0){
//         iem.innerHTML = `0 Oranges
//         <button class = "remove-item btn-link text-red">
//             <i class = "fa-solid fa-xmark"></i>
//         </button>`
//     }
// });

const listItems2 = document.getElementById('item');

console.log(listItems[2].innerText);


// Converting HTML collection to array
const listItemsArray = Array.from(listItems2);
// Doesnt work standalone as html collection is not array;
listItems2.forEach((itme) => {
    console.log(item.innerText);
})



