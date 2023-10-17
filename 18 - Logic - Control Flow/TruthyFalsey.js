const email = 'test@test.com';

if (email){
    console.log('You passed in an email');
}

console.log(Boolean(email));

const x = 0;

if (x){
    console.log('This is truthy');
} else{
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 3;

if(children != undefined) {
    console.log(`You have ${children} children`);

} else{
    console.log('Please enter number of children');
}

// Checking for emprt arrays
const posts = ['Post one', 'Post two', 'post three'];

if (posts.length > 0) {
    console.log('List Posts');
} else{
    console.log('No post to list!');
}

// Checking for empty objects
const user = {
    name: 'Brad'
};

if (Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No user');
}

// Loose Equaliy (==)
console.log(false == 0);

