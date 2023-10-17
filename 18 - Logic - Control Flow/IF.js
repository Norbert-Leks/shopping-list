// const x = 10;
// const y = 30;

// if( x > y){
// console.log(`${x} is greater than ${y}`);
// } else {
//     console.log( `${x} is NOT greater than ${y}`);
// }

// if( x !== y){
//     const z = 20;
//     console.log(`${z} is 20`);
// }

const d = new Date(10, 30, 2022, 20, 0 , 0);
const hour = d.getHours();

// if (hour < 12) {
//     console.log('Good Morning');
// } else if (hour < 18) {
//     console.log('Good Afternoon');

// } else{
//     console.log('Good Night');
// }

// Nested IF
if (hour < 12) {
    console.log('Good Morning');
} if (hour == 6){
    console.log('Wake up!');

} else if (hour < 18) {
    console.log('Good Afternoon');

} else{
    console.log('Good Night');
}

if (hour >= 7 && hour < 15) {
    console.log('It is work time!!');
}

if (hour ==6 || hour == 20) {
    console.log('Brush your teeth!');
}

