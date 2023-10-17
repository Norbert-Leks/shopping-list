const post = {
    id: 1,
    title: "Post One",
    body: "This is the body",
};

// Convert to JSON string
const str= JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

console.log(obj.id);

const posts = [
    {id: 1,
    title: "Post One",
    body: "This is the body",
    },
    {
    id: 1,
    title: "Post Two",
    body: "This is the body",
    }
];

console.log(posts);