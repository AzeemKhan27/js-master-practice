class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }
}

class Teacher extends User{      // In class "extends" keyword working same as "prototype" in functions: we can make instanse/hold in another class.

    constructor(username,email,password){
        // super() keyword automatically "call" and taking access of "this" behind the seen. so super() is so powerfull keyword.
        super(username)           
        this.email = email,
        this.password  = password
    }

    addCource(){
        console.log(`A new cource was added by ${this.username}`)
    }
}

const inheritData = new Teacher("azeem","azeem123@gmail.com","1234567")
inheritData.addCource()

const UserMasala = new User("UserMasala")
UserMasala.logMe()

console.log(inheritData === Teacher);  // OUTPUT : false (because we comes with instance not exact)
console.log(inheritData instanceof Teacher); // OUTPUT : true (because we comes with it's instance.)
console.log(inheritData instanceof User); // OUTPUT : true (because we comes with it's instance.)