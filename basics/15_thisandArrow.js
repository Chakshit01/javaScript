const obj = {
    name:"Chakshit",
    "Last_name":"dhandli",
     mobNo:3987923568,
    welcomeMessage:function(){
        console.log(`${this.name},welcome to website`);
        console.log(this);
    }
}
obj.welcomeMessage()

// function obj2(){
//     console.log(this)
// }
// obj2()

// Arrow function

const arrFun = () =>{
    console.log(this) // will basically check the context using this but this is undefined inside the arrow function
}

arrFun()

const addTwo = (num1,num2) =>{
    return(num1+num2)
}

console.log(addTwo(5,6))