// Immediately Invoked Function Expressions (IIFE)

//gobal scope ka polution sa problem hoti hai kayi bar to usko hatna ka liya IIFE ka use karyta hai
// the chai is named iife
(function chai(){
    //named iife
    console.log(`DB CONNECTED `);
})();

// chai()

((name) => {
    //simple iife
    console.log(`DB CONNECTED Too ${name}`);
})('Suraj')