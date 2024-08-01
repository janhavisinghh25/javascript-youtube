// Primitive

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol( '123' )
const anotherId = symbol('123')

console.log( id === anotherId );

// const bigNumber = 9898989898n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "doga" ]
let myObj = {
    name : "janhavi"
    age : "19"
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "janhavisingh@gmail.com"

let anothername = myYoutubename
anothername = "janhavisingh"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user2gmail.com",
    upi: "user@ybl"
}

let userTwo = usrOne

userTwo.email = "janhavi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

