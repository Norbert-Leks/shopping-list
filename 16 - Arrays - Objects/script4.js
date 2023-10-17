let x;

const todo = {};

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.322,

        },
    },
};

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

// Line 27 and 28 do the same thing line 27 is more efficient
const obj3 = {...obj1,...obj2};
const obj4 = Object.assign({}, obj1, obj2);

x = obj4;

const todos =[
    {id: 1, name:'Buy Milk'},
    {id: 2, name:'Pick up kids from school'},
    {id: 3, name:'Take out trash'},
];

x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('age');

console.log(x);