// singleton

// object literals
//Object.create

const mySym = Symbol ("key1")

const Jsuser = {
    name : "janhavi",
    "full name" : "Janhavi singh",
    [mySym] : "mykey1",
    age: 19,
    location : "varanasi",
    email : "janhavisingh@gmail.com",
    isLoggedIn : false,
    lastLogininDays : ["Monday","Tuesday"]
}

console.log(Jsuser.email);
       //or
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

Jsuser.email = "janhavi@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "janhavis@gmail.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
console.log("hello jsuser");
}
Jsuser.greeting2 = function(){
    console.log(`hello jsuser, ${this.name}`);
    }
    

console.log(Jsuser.greeting());
console.log(Jsuser.greeting);
console.log(Jsuser.greeting2());








