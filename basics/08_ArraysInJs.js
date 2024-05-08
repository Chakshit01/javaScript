let arr = [0,1,2,3,4,5,6]
// console.log(arr[1])

// other way of declaring array
const myArr = new Array ('ram','Shyam','rahul')
// console.log(myArr[2])

// also check other array methods like push pop
// check methods like indexOf, includes and various other methods



arr.unshift(9)
arr.shift()
// console.log(arr);
const newArr =myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// slice , splice

const myN1= arr.slice(1,3)

console.log("B",myN1)
console.log("A",arr)

const myN2 = arr.splice(1,3)
console.log("C", myN2)
console.log("D",arr)

/*from the above outputs we conclude the following differences bw slice and splice

1. splice will include the last value whereas splice does'nt
2. also splice will manipulate the array whereas slice does'nt have any impact on the array




*/