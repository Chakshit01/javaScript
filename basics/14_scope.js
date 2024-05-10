let a =10
var b =20
const c =39

if(true){
    let a=10
    const c= 46
    var b= 7
}

console.log(a)
console.log(b)// output :7 instead of decalaring b=20 in global scope 
// var is taking the latest initialized value from the local scope this is the main reason that we don't use  var

console.log(c)