//______________________adding 10 in each numbers in array_________________________

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.map((num)=> num+10)

//______________________________________ OR _______________________________________

// const newNums = [];
// myNums.forEach((num) => {
//     num += 20;
//     newNums.push(num)
// })

// console.log(newNums);

//___________________________ Chaining ______________________________

const newNums = myNums
                .map((num) => num*10)
                .map((num) => num+1)
                .filter(num=>num>=40)

console.log(newNums);                


