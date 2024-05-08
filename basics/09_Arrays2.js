const arr1 = [1,2,3,]
const arr2 = [4,5,6]

// use push, concat, spread, flat
// arr1.push(arr2) will also manipulate the arr1
// console.log(arr1)

const newArr = arr1.concat(arr2)

// console.log(newArr)
// console.log(arr1) now we'll not see any changes in the original array

const list1 = new Array('raj', 'ram ', 'rohit')
const list2 = new Array('Aman','ajay','ashish')


// merging using spread (basically will spread all the items of the given array)
// console.log(...list1,...list2)


const myArr = [1,2,4,[5,6],8,7,[9,[3,[6,7,8,9]]]]
const realArr = myArr.flat(2) // will open the array till depth 2
// console.log(realArr)

// other properties of Arrays
console.log(Array.isArray("Chakshit")) // will check whether the string is Array
console.log(Array.from("Hitesh"))//will generate array from String
           // ******************************       //
console.log(Array.from({name:"Chakshit"}))// will be confused from where to create array from the key or the value


let score1= 101
let score2 =102
let score3 =104

console.log(Array.of(score1,score2,score3))
