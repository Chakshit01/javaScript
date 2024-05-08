// singleton (literals ki tarah declare krte hue singelton nhi bnta)

const  mySym = Symbol("mykey1")

// object literals
const JsUser ={
    name:"Chakshit",
    [mySym]:"mykey1",
    "fullName" : "Chakshit Dhandli",
    email : "chakshitdhandli22@gmail.com",
    mobile : 806848549,
    adress: "Gurugram",
    isLoggedIn: false
    
}

console.log(JsUser [mySym])// for accesing the Symbol key
console.log(JsUser ["fullName"])// for accessing key when it is String

//   ******* Other methods of Objects ************ //
JsUser.email="chakshit@maruti.com"  //will reflect the changes in the email 
// Object.freeze(JsUser) // will frezze the object and no further changes can be made
JsUser.email ="ram@gpr.com"// will not make any change as freeze is applied
// console.log(JsUser)

// function declaration 
JsUser.greeting = function(){
    console.log("hello User");
}

JsUser.greeting2 = function(){
    console.log(`hello User, ${this.fullName}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())