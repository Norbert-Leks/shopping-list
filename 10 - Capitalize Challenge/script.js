const myString = 'developer';

// taking character at index 0 and changing it to upper case and then concatenaing the rest of the 'eveloper' onto it.
const mNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(mNewString);