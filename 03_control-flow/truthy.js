const userEmail = "okay@gmail.com"

if(userEmail){
    // console.log("got mail id");
}else{
    // console.log("unavailable");
}

// ::: --- falsy value --- :::
// (1) false, (2) 0 , (3) -0 , (4) "" , (5) BigInt 0n, (6) null, (7) null, (8) undefined, (9) NaN

// ::: --- truthy value --- :::
// (1) "0", (2) 'false' (3) " ", (4) [], (5) {}, (6) function(){}

// const emptyArray = []
// if(emptyArray.length === 0){
//     console.log("empty array!")
// }

// const emptyObject = {}
// if(Object.keys(emptyArray).length === 0){
//     console.log("object is empty!")
// }


//----------------------------------- IMP -------------------------------------------

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10       // here it will take first value

//val1 = undefined ?? 20  // here it will take second value because first value is 'undefined'

val1 = null ?? 99  // here it will take second value because first value is 'null'
// console.log(val1);


//+++++++++++++++++++ TERNARY-OPERATOR +++++++++++++++++++++++

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80 or equal") : console.log("more than 80");

