//Primitive


// 7 types: String,Number,Boolearn, null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 326546943213223445n


//reference (Non Primitive)

//Array,Objects,Functions


const hero = ["raushan", "Deepak", "Doga"];
let myObj ={
    name: "raju",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);//bigint
console.log(typeof outsideTemp);//object
console.log(typeof scoreValue);//number
console.log(typeof myFunction);//function
console.log(typeof anotherId);//symbol


// 

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myYoutubename="panditclasses"

let anothername = myYoutubename
anothername = "classespandit"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email ="rkraushan073@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);