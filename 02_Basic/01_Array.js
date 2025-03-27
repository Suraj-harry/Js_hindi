//array
// In js when we copy the array it makes a shallow copy of array . shallow copy of an object is a copy whose properties share the same reference
// deep copy don't share same reference copy

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1 ,2 ,3 ,4)

// console.log(myArr[4]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// slice = it will make copy and then change , splice = it will change or manipulate the origanl array 

console.log("A ", myArr);//orginal array

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)

console.log("C ", myArr);
console.log(myn2);