// Immediately Invoked Function Expressions (IIFE)

// we used IFFE to resolve pollutions from global scope variable, and when i want it run immediately.
//because sometime variable pollution of global scope can make issue. 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Azeem');

//++++++++++++++++Interesting++++++++++++++++++++++

(named=(msg)=>{
    console.log(`${msg}`)
})(`this is called "named" IFFE arrow function`)

(function Named(message){
    console.log(`${message}`)
})
(`this is called "named" IFFE regular function`)