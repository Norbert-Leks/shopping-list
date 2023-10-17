const x = 100;
const foo = 1;
var bar = 2;

if (true) {
    const y = 200;
    console.log(x + y);
}

// console.log(x + y);

for (let i = 0; i <= 10; i++) {
    console.log(i);

}

// console.log(i);

if(true) {
    const a = 500;
    let b = 600; 
    // Var can be used outside the block scope of the if loop.
    var c = 700;
}

function run() {
    var d = 100;
    console.log(d);
}