for (let i = 0; i < 10; i++) {
    console.log(`Current number ${i}`);
}

// Nested Loops
// for (let i = 1; i <= 10; i++) {
//     console.log(`Curent number ${i}`);

//     for (let j = 1; j<=10; j++) {
//         console.log(`New Number ${i*j}`);
//     }
// }

// Loop through an array
// const names = ['Brad', 'Sam', 'Sara', 'John']

// for (let i = 0; i < names.length; i++) {
//     if (i === 2){
//         console.log(names[i] + ' is the best');
//     }else {
//         console.log(names[i]);
//     }
// }

// Break and Continue 

// for (let i = 0; i <= 20; i++) {
//     if(i === 15){
//         console.log('Breaking......');
//         break;
//     }
//     console.log(i);
// }

for (let i = 0; i <= 20; i++) {
    if(i === 13 ){
        console.log('hmmmmmmmmmmm......');
        continue;
    }
    console.log(i);
}