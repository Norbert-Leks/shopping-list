const number = [1,2,3,4,5,6,7,8,9,10];

// const doublednumbers = number.map((numb) => numb * 2);

// console.log(doublednumbers);

// // Same with forEach

// const doublenumbers2 = [];

// number.forEach((numb) => {
//     doublenumbers2.push(numb *2);
// });

// console.log(doublenumbers2);


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

// Get an array of company names

// const company = [];

// companies.forEach((comp)=> {
//     company.push(comp.name);
// });

// console.log(company);

// Get an array with just company and category

// const CompCategory = [];

// companies.forEach((comp) => {
//     CompCategory.push(comp.name);
//     CompCategory.push(comp.category);
// })

// console.log(CompCategory);

// Age of companies in years.

const companyAge = companies.map((company) => {
    return {
        name: company.name,
        age : (company.end - company.start) + ' years',
    }
});

console.log(companyAge);

// Chain map methods
const squareAndDouble = number
    .map((numb) => Math.sqrt(numb))
    .map((sqrt) => sqrt*2);

console.log(squareAndDouble);

// Chaining differet methods

const evenDouble = number
    .filter((numb) => numb % 2 === 0)
    .map((numb) => numb * 2);

console.log(evenDouble);
