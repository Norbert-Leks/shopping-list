const items = ['book', 'table', 'chair', 'kite'];
const users = [{name: 'Brad'}, {name: 'Kate'}, {name:'Steve'}]

// for (let i = 0; i < items.length; i++){
//     console.log(items[i]);
// }

// for (const item of items) {
//     console.log(item);
// }

for (const user of users) {
    console.log(user);
}

const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

const map = new Map();
map.set('name', 'John')
map.set('age', 30)

for (const [key,value] of map) {
    console.log(key, value);
}
