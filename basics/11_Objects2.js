const tinderUser ={name:"Ram",
    email:"ram@google.com",
    mobile:80596334729,
    IsLoggedIn:false,
    Adress:"Delhi"
}

const newUser ={id:123,
    name:{
        userName:{
            firstName: "Rahul",
            lastName:"gupta"
        }
    },
    adress:"punjab"
}

console.log(newUser.name.userName) // for fetching from the nested layer

const obj1 ={1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3={obj1,obj2};
const obj4=Object.assign(obj1,obj2)
console.log(obj3)
console.log(obj4)

// console.log(tinderUser.Adress)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('IsLoggedIn'))