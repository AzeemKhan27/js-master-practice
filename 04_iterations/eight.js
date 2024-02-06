const myNum = [1,2,3];
// const myTotal = myNum.reduce(function(acc,currVal){
//     return acc + currVal;
// },0);


const myTotal = myNum.reduce((acc,currVal) => acc + currVal);

// console.log(myTotal);

//___________________Shoping Card ____________________

const shopingCard = [
    {itemName : "Js course", price : 1999},
    {itemName : "Py course", price : 999},
    {itemName : "Dsa course", price : 5999},
    {itemName : "Mern course", price : 4999},
];

const priceToPay = shopingCard.reduce((acc,item) => acc + item.price,0);
console.log(priceToPay);