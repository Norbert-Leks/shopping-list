// ||= assigns the right side value only if the left is a falsly value.

let a = false;

// if (!a) {
//     a = 20;
// }
// a = a||10;

a ||= 10;

console.log(a);

// &&= assings the right side value onl if the left is a truthy value.

let b = 10;

// if (b) {
//     b = 20;
// }

// b = b && 20;

b &&= 20;

console.log(b);

// ??= assings the right side value only if the left is null or undefined.

let c = null;

// if (c === null || c === undefined){ 
//     c = 20;
// }

// c = c ?? 20;

c ??= 40;

console.log(c);