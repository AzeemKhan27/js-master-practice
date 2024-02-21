
// ======================= (1) Object Literal =======================

const user = {
    username : "azeempathan",
    loginCount : 9,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user from DB");
        // console.log(`UserName : ${this.username}`);  //we use ".this" keyword for take current our value,to tell JS MEMORY CONTEXT.
        // console.log(this);  //we use ".this" keyword for take current our value,to tell JS MEMORY CONTEXT.
    }
}

// console.log(user.username)
console.log(user.getUserDetails())

// ======================= (2) Constructor function =======================
// note: construction function always gives us new instance/copy and we need to use "new" keyword

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn,

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this         // we dont need to return, it already define implicitly
}

const userOne = new User("azeemkhan", 13, true);
// const userTwo = new User("azeem", 11, false);
console.log(userOne.constructor);  // .constructor is the keyword

// --------------: instanceof operator tests :----------------

console.log(userOne instanceof User);
console.log(userOne instanceof Object);
