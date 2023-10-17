let x; 

// Array Literal
const numbers = [15, 16, 2203, 4231, 2212];

// Array Constructor
const strings = new Array('apple', 'orange', 'watermelon');

x = numbers[2];
y = strings[1];

x = `My Favourite fruit is an ${strings[2]}`;

strings[3] = 'grape';

strings[strings.length] = 'blueberry';
strings[strings.length] = 'tangerine';


console.log(strings);