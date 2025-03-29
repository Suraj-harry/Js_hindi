//singleton is same way to understand the when we make from constructor it make object but in other way it does't make when we declare in the form or literals it not make  singleton but with construtor it happens

// Object.create

//Symbols
const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "Suraj",
    "Full Name": "Suraj Gupta",
    [mySym]: "mykey1", // these is a normal but if we have to use symbol then we have to de 
    age: 18,
    place: "Jaipur",
    email: "suraj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser["Full Name"]);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "suraj@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "suraj@google.com"
console.log(JsUser);

//functions
JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());