 
console.table({name: 'Brad', email:'brad@gmail.com'});

const x = 100;
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles); 

