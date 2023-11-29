const another_arr = [1,2,3, [4,5,6,[7,[8]]] , 9,[10,11,[12,[13,[14]]]],[15]];
// console.log(another_arr.flat(Infinity))

//Check Array 
console.log(Array.isArray("Azeem Khan"));

//convert in array
console.log(Array.from("Azeem Khan"))

let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1,sc2,sc3))


const arr1 = [1,2,3];
const arr2 = [4,3,2,1];

console.log([...arr1, ...arr2])