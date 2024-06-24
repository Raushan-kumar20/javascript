
function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
} 
//sayMyName()

//function addTwoNumbers(number1, number2){

//    console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result)//Result:  8


function loginUserMessage(username = "sam"){
    if(!username) {
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("raushan"))//raushan just logged in
console.log(loginUserMessage("raushan"))//raushan just logged in


function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500,2000))//[ 500, 2000 ]

const user = {
    usesrname: "raushan",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);//username is undefined and price is $ {anyobject}
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([100, 400, 500,1000]));//400