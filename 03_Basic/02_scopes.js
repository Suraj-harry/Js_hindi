//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Suraj"

    function two(){
        const website = "youtube.com"
        // console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "Suraj"
    if (username === "Suraj") {
        const website = " youtube.com"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){ // normal function hai 
    return num + 1
}

addone(5)


// addTwo(5)
const addTwo = function(num){ // isko ek variable ma save kiya hia 
    return num + 2
}

// addTwo(5)