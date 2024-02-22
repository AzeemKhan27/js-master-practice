class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(val){
        return this._email = val;
    }

    //when we use get/setter and we made property then it will be methods with the name of your property.
    get password (){
        return `${this._password}azeem`
    }

    set password (value) {
        this._password = value
    }
}
// class k bahar se koi value get karna hai then we will use "setter"
const azeem = new User("azeem@gmail.com","1234")
console.log(azeem.password); 
console.log(azeem.email); 