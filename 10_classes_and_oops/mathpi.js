const descripter = Object.getOwnPropertyDescriptor(Math,'PI');
//console.log(descripter);

/*
Output : 
            {
               value: 3.141592653589793,
               writable: false,
               enumerable: false,
               configurable: false
            }

Note : Because Javascript Math.PI is strict Object, which is written/build in C++ and In c++ so much strict checks and conditions for Math.PI.
       that's why we can't change it.
*/


const tea = {
    name : 'ginger tea',
    price : 250,
    isAvailable : true,

    orderTea : function(){
        console.log("chai bann nahi payi.")
    }
}

// console.log(Object.getOwnPropertyDescriptor(tea,"name"))   // now all permissions is true means changable.

/*

//we can change permissions and make it strict our code.

Object.defineProperty(tea,"name",{
    // writable: false,
    enumerable : true
})

console.log(Object.getOwnPropertyDescriptor(tea,"name"))

*/

for (let [key, value] of Object.entries(tea)) {
    if(typeof(value) !== 'function'){
        console.log(`${key} : ${value}`);
    }
}