// Higher Order Array | Loops in JS

const arr = [1,2,3,4,5]

for(const nums of arr){
    // console.log(nums)
}

const greetings = 'hello world'
for(const greet of greetings){
    // console.log(`each char is : ${greet}`);
}

//+++++++++++ MAP ++++++++++++++

const map = new Map()
map.set('IN','India')
map.set('US','USA')
map.set('UAE','Dubai')

// console.log(map);

for(const [key,value] of map){
    console.log(key,':-', value);
}