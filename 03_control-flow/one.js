const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy.")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged-In");
}