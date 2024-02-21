// const myName = 'Azeem    ';
// const mychannel = 'chai  ';
// console.log(myName.trim().length);   

let myHeroes = ['thor','spiderman'];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//Injecting own "azeem" named property in Object directly except "ObjectName.prototype.azeem"

Object.prototype.azeem = function(){           //using with this method, we can target high priority or low priory property and can use everywhere.
    console.log(`azeem is present in all objects.`);
}


// when we give/add method()/property only separated datatype like array,string,object, Is method access will add Object or not?
Array.prototype.heyAzeem = function(){
    console.log(`Azeem says hello`);
}

// heroPower.azeem()
// myHeroes.azeem()        // we are checking our latest added method() with grand parent property.
// myHeroes.heyAzeem()     // here should be method accessable, because we inject our method in array only.
//heroPower.heyAzeem()    // here should not be method accessable, because we inject our method in array only, not giving access to others like Object,Strings.


//++++++++++++++++++++++ Inheritance ++++++++++++++++++++++++++

// ____________________OLD Approach for understanding____________________

const User = {
    name : "tea",
    email : "tea@example.com"
}

const Teacher = {
    makeVideo: true
}


const TeachingSupport = {
    isAvailable : false
}


const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User;

// ____________________ Modern Syntax to create Inheritance ____________________

//Inheritance  : to get access of value

Object.setPrototypeOf(TeachingSupport, Teacher)  // accessing the value of "TeachingSupport" and "Teacher" object.

let anotherUsername = "Codejourneyer1     ";

String.prototype.trueLength = function(){
    console.log(`${this}`); 
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"azeem".trueLength()
"iceTea".trueLength()