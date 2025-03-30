const user = {
    username: "Suraj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this);

//*******************************note*****************************
// browser ka andar jo object hai vo window hai phele ka javascript ma jab sirf browser ma hi run hota tha tab
//gobal object in javascript browser is window
//but in other engin they are empty object  

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

//basic
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))

//implicit return 
// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "Suraj"})
// console.log(addTwo(3,4))



// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()