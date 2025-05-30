// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toLocaleString())
// console.log(mydate.toDateString())


let myOwnDate = new Date(2003, 5 , 24, 4,30 )
// console.log(myOwnDate.toLocaleString())
// console.log(myOwnDate.toDateString())


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myOwnDate.getTime())

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth())


console.log(newDate.toLocaleString('default',{
    weekday: "short"
}))