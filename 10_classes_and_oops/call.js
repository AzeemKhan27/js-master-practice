function setUserName(userName){

    //complex DB calls
    this.userName = userName
    // console.log("called...");
}

function createUser(userName, email, password){
    setUserName.call(this,userName)     // we are sending our "this" keyword to "setUserName()" function
                                        // when we use "call()" we can send optionally our "this", keyword according to situation.
    this.email = email,
    this.password = password
}

const tea = new createUser("azeem","azeem@fb.com","123456")
console.log(tea)


// NOTE : call send our current execution context to another function.