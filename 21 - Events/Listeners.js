// JavaScript Event Listener
const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function() {
//     alert('Clear Items');
// };

// Recommended way

clearBtn.addEventListener('click', onClear);
// clearBtn.addEventListener('click', () => { console.log('Clear Items'); })
// setTimeout(() => clearBtn.removeEventListener('click',onClear),5000);
function onClear() {
    const itemList = document.querySelector('ul');
    // itemList.forEach((item) => item.remove());

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
} 
// setTimeout(() => clearBtn.click(), 5000);