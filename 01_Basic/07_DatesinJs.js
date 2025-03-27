let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

let myCreatedDate1 = new Date(2025, 2, 27)
let myCreatedDate2 = new Date(2025, 2, 27, 15, 13)
let myCreatedDate3 = new Date("2025-03-27") //yy-mm-dd
let myCreatedDate4 = new Date("03-27-2025") //mm-dd-yy
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());   
// console.log(myCreatedDate4.toDateString()); 

let myTimeStamp = Date.now()
let myCreatedDate = new Date("03-27-2025")
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default' , {
    weekday: "long"
})