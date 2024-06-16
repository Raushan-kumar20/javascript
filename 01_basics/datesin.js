 //Dates

 let myDate = new Date()
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleDateString());
 console.log(typeof myDate);

 //let myCreateDate = new Date(2023, 0, 23)//1/23/2023, 12:00:00 AM
 //let myCreateDate = new Date(2023, 0, 23, 5, 3)//1/23/2023, 5:03:00 AM
 //let myCreateDate = new Date("2024-01-14")//1/14/2024, 5:30:00 AM
 let myCreateDate = new Date("01-11-2024")
 console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(new Date);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})