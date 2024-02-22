//__________________________ Class ___________________________

// ES6

// class User{
//     constructor(username,email,password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     encrypPassword(){
//         return `${this.password}aBC`;
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const userData = new User("azeem","azeem@gmail.com","321");
// console.log(userData.encrypPassword());
// console.log(userData.changeUserName());


//__________________________ Functions ___________________________

function User(username,password,email){
    this.username = username
    this.password = password
    this.email = email
}

User.prototype.encrypPassword =  function(){
    return `${this.password}abc`;
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const userData =  new User("azeemkhan","1234","azeemdev@gmail.com",);
// console.log(userData)
console.log(userData.encrypPassword())
console.log(userData.changeUserName())