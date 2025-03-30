function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()

// function addTwoNumber(num1 , num2){ // num1 and num2 are parameters
//     console.log(num1+num2);
    
// }

//another way to find the type of result so we use other function method

function addTwoNumber(num1 , num2){ // num1 and num2 are parameters
    // let result = num1 + num2
    // return result    
    return num1 + num2
}

//addTwoNumber(5,"6") // 5 and 6 are arguments

const result = addTwoNumber(4,6)
//console.log("result :" ,result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Suraj   "))
// console.log(loginUserMessage("Suraj"))


function calculateCartPrice (val1 , val2 ,...num1){ //here ...num1 is rest method it is used by (...)
    return num1
}

//console.log(calculateCartPrice(200 , 197 , 247 , 2978 , 98));

const user = {
    username: "Suraj",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price of car is ${anyobject.prices}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    prices: 499
})

const myNewArray = [220 , 300 , 459 , 999]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray)); 
console.log(returnSecondValue([200 , 300])); 