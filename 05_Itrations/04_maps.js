// how object will run

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift: "Swift By Apple",
}

for(const key in myObject) {
    // console.log(`${key},for shortcut is ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }