// Challenge 1

const getCelsius = (fahrenheit) => ('The Temperature is ' + ((fahrenheit-32)*5/9) + '\xB0C' );

console.log(getCelsius(32));

// Challenge 2

const minMax = (arr) => ('Min: ' + Math.min(...arr) + ' Max: ' + Math.max(...arr));

console.log(minMax([1,2,3,4,5]));

// Challenge 3
(function (length, width){
    console.log('On page load');
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length*width} `)
})(10,5);

