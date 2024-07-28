const accountId = 144553
let accountEmail = "janhavisingh@gmail.com"
var accountPassword = "9333"
accountCity = "varanasi"
let accountState;

// accountId = 98 // not allowed


accountEmail = "janhavi@gmail.com"
accountPassword = "98989898"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
