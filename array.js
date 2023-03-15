let array = ["can", "store", 5, "and", "string"]

array.push("To insert element in end")
console.log("using Push", array);

array.pop()//to pop the last element
console.log("using Pop", array);

array.unshift("insert element at begining")
console.log("Using unshift", array);
array.shift()//remove element from begining
console.log("Using shift", array);

const startIndex = 2;
const numberOfElementToDelete = 1
const replacedData = "number"
array.splice(startIndex, numberOfElementToDelete, replacedData)
console.log("Using splice", array);

let startPosition = 1, totalNumbersToSlice = 3;
console.log("Using slice", array.slice(startPosition, totalNumbersToSlice));

let newArray = [...array]
console.log(newArray);
newArray = array;//acts like pointers if newArray is changed then it is reflected to old one

newArray.push("ds")
console.log(newArray);
console.log("Copying an array using [...<arrayname>]", newArray);

console.log("WE can use spread operator(...) inside an array", ["array", ...array])
console.log("we can use indexOF() to find index of element  ", array.indexOf("number"), "if element is not prsent then", array.indexOf("element"));

const concatArray = newArray.concat(array);
console.log("concatenation of Array", concatArray);

console.log("Convert array to string", concatArray.toString()) // will add ,
console.log(" Join Array with other separators ", concatArray.join("-")) // Converts array to string

let arrNums = [50, 10, 100, 65, 1, 30, 10, 100, 65];

console.log("Sorting ascending array ", arrNums.sort((a, b) => { return a - b }));
console.log("Sorting ascending array ", arrNums.sort((a, b) => { return b - a }));

console.log("Finding maximum number in an array", Math.max.apply(null, arrNums))
console.log("Finding minimum number in an array", Math.min.apply(null, arrNums))


arrNums = [1, 2, 52, 62, 252, 20]
console.log("Every Array Numbers", arrNums.every((num) => num > 10))

// Needs Node version 16 or more
console.log("Get Last number of array", arrNums.at(-1))

// replaces 1 with 2 
arrNums.copyWithin(0, 1, 3);
console.log(arrNums);
