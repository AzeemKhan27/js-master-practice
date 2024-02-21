const promiseOne = new Promise(function(resolve,reject){
    //Do any task
    // DB calls, cryptography, nettwork
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve()
    },1000);
    
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
   setTimeout(function(){
      console.log("Async Task 2 is complete");
      resolve()
   },1000);
})
.then(function(){
    console.log("Async task 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"azeemkhan",email:"azeem@gmail.com"})
    },1000);
})

promiseThree.then(function(user){
    console.log(user)
});

// FOUR

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "azeemKhan123", password : "123" })
        }else{
            reject("ERROR : SOMETHING WENT WRONG! | 404")
        }
    },1000)
})

promiseFour.then(function(userData){
    return userData.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("The promise is either resolved or rejected.")
});

const promiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
    let error = true;
    if(!error){
        resolve({taskStatus : 'DONE'})
    }else{
        reject("Error : FOUND PROBLEM")
    }
   },1000);
})

async function consumePromiseFive(){
   try {
        const response = await promiseFive
        console.log(response)
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive()


//________________________NEXT-ONE___________________________

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://api.github.com/users/AzeemPathan9897");
//     const data = await response.json();
//     console.log(data)
//     } catch (error) {
//         console.log("ERROR FOUND :" + "API not responding.")
//     }
// }

// getAllUsers()

//_____________________ OR ___________________________

fetch("https://api.github.com/users/AzeemPathan9897")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("ERROR FOUND : ",error.message)
})
.finally(console.log("OKAy Runned!"))