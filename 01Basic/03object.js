
const regularObject = {
    email : "some@gmail.com",
    fullname : {
        username : {
            fName : "Azeem",
            lName : "Khan"
        }
    }
}

console.log(regularObject.fullname.username.fName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//we can concat two object values in an another object with the help of assign method.
// const obj3 = Object.assign({},obj1, obj2);
// console.log(obj3)

const obj4 = {...obj1,...obj2}
console.log(obj4)

const tinderObj = {};

tinderObj.id = "123abc"
tinderObj.name = "ABC"
tinderObj.isLoggedIn = false

console.log(tinderObj.hasOwnProperty("names")) // isExist in object or not.
console.log(Object.keys(tinderObj))        // it return obj keys.
console.log(Object.values(tinderObj))      // it return obj values.
console.log(Object.entries(tinderObj))     // it return obj each value and keys in separated array.

