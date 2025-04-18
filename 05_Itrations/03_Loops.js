// Example for-of loops in JavaScript

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
//    console.log(num);
}

const greeting = "Hello World . Welcome to JavaScript World";

for (const greet of greeting) {
    // console.log(`Each Character is: ${greet}`);
}

//Maps

const map = new Map()
map.set("IN","India");
map.set("US","United States");
map.set("UK","United Kingdom");
map.set("AU","Australia");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}