// *** functions**** //


function addition(number1,number2){
   let ans= number1+number2;
   console.log(typeof(ans))
   return ans;
}

console.log(addition("a","b"));

// different ways of passing parrameters and calling function

function logIn(username)
{

    if(!username) // i.e username === undefined
        {
       console.log("Please enter valid username") 
       return
    }
    return `${username} logged in `

}

// console.log(logIn("abc"))
// console.log(logIn())


function calculatePrice(...num1) // rest operator
{
    return num1
}

console.log(calculatePrice(200,400,4000,5000))

//************Object in functions ***********/ 
const customer=
{
    name:"Rahul",
    price: 989
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject(customer)

/**************** Arrays inside function *************/
const newArray = [20,34,45,5,67,45]

function fetchArray(arr){
    return arr[1]
}

console.log(fetchArray(newArray))