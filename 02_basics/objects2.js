//const tinderUser = new Object()//{} //singlton object
const tinderUser = {}//non singlton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userfull:{
            firstname: "Rausahn",
            lastname: "Kumar"
        }
    }
}

//console.log(regularUser.fullname.userfull.firstname);//Raushan

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 ={ obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } 
//const obj3 = Object.assign({}, obj1, obj2,obj4)

const obj3 ={ ...obj1, obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true


const course = {
    coursename: "js in hindi",
    price: "229",
    courseInstructor: "Raushan"
}

//course.courseInstructor

const {courseInstructor:instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]