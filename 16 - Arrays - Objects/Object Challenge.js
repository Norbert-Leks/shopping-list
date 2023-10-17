// Step 1
const library = [
    {
        title: "The Wizard of Oz",
        author: "L. Frank Baum",
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: "Harry Potter & Philosphers Stone",
        author: "JK Rowling",
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: "Daring Greatly",
        author: "Brene Brown",
        status: {
            own: true,
            reading: false,
            read: false,
        }
    }
]
// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const {title: firstBook} = library[0];

// Step 4 
lib = JSON.stringify(library);


console.log(lib);