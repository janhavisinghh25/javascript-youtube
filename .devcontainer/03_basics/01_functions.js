function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("N");
    console.log("H");
    console.log("A");
    console.log("V");
    console.log("I");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "jaanv"){
    if(username===undefined) // or if(!username)//
    {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("janhavi"))
// console.log(loginUserMessage("janhavi"))