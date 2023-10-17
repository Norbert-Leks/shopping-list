console.log(10 > 20 && 30 > 15);

console.log(10 > 20|| 30 > 15);

let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;

console.log(a);

// || - Will return the first truth value or the last value.

let b;
b = 10 || 20;
b = 0 || 20;

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined.

let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;

console.log(c);