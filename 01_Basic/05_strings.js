//to declare the string 1st method
const name = "Suraj"
const repoCount = 50

// console.log(name + repoCount + " Value"); not good for readable form 

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

//2nd method to declare string

const gameName = new String ("Suhani-lv")

// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

console.log();


const newStringOne = "   Suraj   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"


console.log(url.replace('%20' , '-'));

console.log(url.includes('hitesh'));

console.log(url.includes('sundar'))

console.log(gameName.split('-'));