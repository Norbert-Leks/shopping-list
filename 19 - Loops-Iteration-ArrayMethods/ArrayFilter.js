// const numbers = [1,2,3,4,5,6,7,8,9,10];

// // const evenNumbers = numbers.filter(number => number % 2 === 0);

// const evenNumbers = [];
// numbers.forEach(number => {
//     if (number%2 === 0){
//         evenNumbers.push(number);
//     }
// });


// console.log(evenNumbers);

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    {name: 'Company Nine', category: 'Retail', start: 1981 , end: 1989 },
];

// Get only Retail Companies

const RetailCo = companies.filter(RetailCo => RetailCo.category === 'Retail');

// console.log(RetailCo);

// Get companies that started in or after 1980 and ended in or before 2005

const OldCo = companies.filter(OldCo => (OldCo.start >= 1980 && OldCo.end <= 2005) );

// console.log(OldCo);

// Get companies that lasted 10 years or more

const LongCo = companies.filter(LongCo => ((LongCo.end - LongCo.start) >= 10));

console.log(LongCo);