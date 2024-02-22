class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createdId(){       //we are use static because static will stop accessibility of method/property
        return `123`
    }
}

const azeem = new User("azeemkhan")
// console.log(azeem.createdId());

class Teacher extends User{
    
    constructor(username,email){
        super(username)
        this.email = email
    }

}

const iphone = new Teacher("Iphone","iphone@.com");

// iphone.logMe()
console.log(iphone.createdId())   // we can access creadId because we used "static" keyword