// Primitive

// 7 Types : String , Number , boolean , null , symbol , BigInt= scientific number or big values cover in BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non-Primitive)

// Arrays , function , Objects

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// ****************************Memory*******************************//

// Stack , Heap  Memory

// All Primitive type are used in Stack memory
// All Non-primitive type are used in Heap memory

let myName = "Suraj"

let anotherName = myName
anotherName = "Suhani"

console.log(anotherName);
console.log(myName);

let userOne = {
    email : "user13213@gmail.com",
    upi : "user@809985ybl" 
}

let userTwo = userOne

userTwo.email = "suhani1409@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);