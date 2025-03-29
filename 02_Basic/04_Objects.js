//const tinderUser = new Object();//normal object
const tinderUser = {}//it is called singleton

tinderUser.id = "123abc"
tinderUser.name = "Suraj"
tinderUser.isLoggedIn = true

//console.log(tinderUser);

const regularUser = {
    email: "Suraj@google.com",
    fullname: {
        userfullname: {
            firstName: "Suraj",
            lastName: "Gupta"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1:"A" , 2:"B"}
const obj2 = {3:"C" , 4:"D"}
const obj3 = {5:"E" , 6:"F"}

//const obj3 = {obj1 , obj2 }
//const obj3 = Object.assign({} , obj1 , obj2) 
const obj4 = {...obj1 , ...obj2 , ...obj3}

//console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hitesh@gmail.com"
    },
    {
        id: 3,
        email: "suraj@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "JavaScript",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor : instructor} = course 

console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company = "Hitesh")


//jason part
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
