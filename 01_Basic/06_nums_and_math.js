const score = 400
// console.log(score);

const balance = new Number(459);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'));//en-In covert the US counting numbers to indian numbers

// +++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//always give the values user 0 and 1
console.log((Math.random()*10)+1);//after *10 the values comes 9.67something but if 0.09*10 then we add 1 that not give answer as 0 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//here we do Math.random but we don't multiply by 10 we do (max-min +1 ) the not come 0 value and last add min value the give the answer with the addition of min value