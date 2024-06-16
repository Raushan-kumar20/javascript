const name = "raushan"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('raush-an-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);//The length property returns the length of a string
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));//character access
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);

const newStringOne = "    hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());//trim is starting and ending space is remove

const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('raju'));

console.log(gameName.split('-'));