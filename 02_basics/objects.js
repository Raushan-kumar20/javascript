// singleton;-constructor
//Object.create

// object literals

const mySym =Symbol("key1")


const jsUser = {
    name:"Raushan",
    "full name": "Raushan Kumar",
    [mySym]: "mykey1",
    age: 18,
    location:"Sitamarhi",
    email:"raju@gmail.com",
    isLoggedIn: false,
    lastLoginDay:["Monday","Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log( jsUser[mySym])

jsUser.email = "rohan123@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "rohankalu@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());