//till objects it is in js_obj.js
//while loop in js

let myArray = [];
let i = 2;

while ( i >= 0 ) {
  for( j = 0; j <= 2; j++ ) {
    myArray.push(i)
  }
  i--
} 

console.log(myArray)

//for loops

let total = 0;

for( i = 0; i < myArray.length; i++ ) {
  total += myArray[i]
  myArray[i] += total
}

console.log(total)


// do while
// let i = 0;
do{
  i = i+myArray[i]
} while( myArray.length < i );

console.log(i)

//Recursion
console.log(myArray)
function multiply( myArray, n ) {
  if ( n <= 0){
    return 1
  }
  else{
    return multiply(myArray,n-1)*myArray[n-1]
  }
}
console.log(multiply(myArray,myArray.length-1))

// Math function

//Math.random to return nummber b/w 0 and 1
console.log(Math.random())

//random number to get whole number

console.log(Math.floor(Math.random()*10))

//random number between range

console.log(Math.floor(Math.random()* (15-10+1)+10))

// cnverting string to interval
console.log("10")
console.log(parseInt("10"))
console.log(parseInt("10011",2))//here 2 is for converting from binary to integer

//ternary condition is short hand opt used insted of if else
console.log("ternary condition",15 < 20 ? "15 is smaller": "15 is larger")
// after question mark whatever is executed if condition becomes true else after ":" will be executed

console.log(( 15 === 0 ) ?  "zero" :  ( num > 0 ) ? "positive" : "negative" );
