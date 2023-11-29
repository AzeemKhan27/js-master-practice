const myArr = [0,1,2,3,4,5]
console.log(myArr.unshift())
//console.log(myArr);

//console.log(myArr.join()) // join convert array value in string except original value of array.

// Splice, Slice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3);
console.log("C",myArr)
console.log(myn2)