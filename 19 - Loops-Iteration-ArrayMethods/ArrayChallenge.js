const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

// Challenge 1: Return people who are 25 and under but only return name which includes first and last and their email.

const youngPeople = people
    .filter((person) => person.age <= 25)
    .map((person) => ({
            name: person.firstName + ' ' + person.lastName,
            email: person.email
    })); 

// console.log(youngPeople);

// Challenge 2: Add all of the positives in the Array # Working answer but can be more efficient with use of filter and reduce combined

const numbers = [2,-30, 50, 20, -12, -9, 7];

const positiveSum = numbers.reduce((acc, cur) => {
    if (cur > 0){
        acc += cur;
    }
    return acc;
}, 0) ;

// console.log(`Sum of positive integers: ${positiveSum}`);

// Challenge 3: 

const words = ['coder', 'programmer', 'developer'];

capitalisedWords = words.map((word) => word[0].toUpperCase() + word.slice(1,word.length));

console.log(capitalisedWords);



