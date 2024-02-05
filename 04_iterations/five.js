const coding = ["JS","PY","RB","CPP"];

//approach-1

// coding.forEach(function(name){
//     console.log(name)
// })

//approach-2

// coding.forEach((name)=> console.log(name))


//approach-3

// function printName(name){
//     console.log(name);
// }

// coding.forEach(printName);  // we are passing "printName" as a refrence in forEach method, we can't execute like "printName()".


// +++++ THREE parameters in forEach() +++++

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "JS"
    },
    {
        languageName : "Python",
        languageFileName : "PY"
    },
    {
        languageName : "C++",
        languageFileName : "CPP"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})