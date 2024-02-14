let name = "232";
let str = "323acg";
console.log(typeof(name));
// datatype Conversions
let Name = Number(name);
let Str = Number(str); 
// will convert both the datatypes of both
console.log(typeof(Name));
console.log(typeof(Str));

console.log(Str);// will display value NaN which means not a number which itself is of Number datatype 

console.log(Name);// will display the value as the string was easily convertable to the Number datatype


let isApplicable = "";
let isVariable = "not";
let isApp = Boolean(isApplicable);
let isVar = Boolean(isVariable);
console.log(typeof(isApp));
console.log(isVar);// false because string is empty

console.log(isApp);// true because string contains some value
