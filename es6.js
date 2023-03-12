//"use strict" it is used to avoid unsafe coding practices
"use strict"

let i = 0; // let allows variable inside block of code is not used in other blocks

if( i == 0 ){
  let i = 1;
  console.log("i inside if",i)
}

console.log("i outside if",i)

const X = "var" //This is read only variable

const arr = [1,2,3] //array has become immutable
//to change array variable
arr[1] = 5;
//above code will change array variable
//arr=[3,5,9] is not possible

const OBJ = {
  "PI": 3.14
} //this wont make object read only so

Object.freeze(OBJ) //this will make object readonly

//inline function in  js
const myFunc = function() {
  return "Inline function dont have names"
}

console.log(myFunc())
//inline functions using arrow function

const myarr = () =>{
  return "inlinefunc";
}

const myarw=() =>"inline"

console.log(myarw())
const arw=(name=1)=>{return name+1}//in function call name=1 is default param

const ar=[25,36,49]

const sum = (...args)=>{

  return args.reduce((result,item) => result+item,0)

}

console.log(sum(25,36,44)); //...args converts parameter to array  reduce will iterates array and passes th value to next function

const obj={
  hi:"hello",
  welcome:"Thanks"
}

const { hi, welcome } = obj;
console.log({ hi, welcome })//assigning statemnts here property name and variable name should be same
//if want to change var name while assigned then

const { 
  hi: greet, 
  welcome: giveup 
} = obj
console.log( greet, giveup );

const oio={
  "greeting":{
    hello:"hi",
    thanks(){return "Welcome"} // funtions in objects
  },
  "wishing":{
    "cong":"thanks",
    "all the best":"thanks"
  }
}

console.log(oio);

const { 
  greeting: { 
    hello: hey
  },
  wishing: {
    cong: cons
  }
} = oio;

console.log(hey,cons);

// Spread 
let [a,b,,,,c]=[1,2,3,4,5,9,6,8,7]
console.log(a,b,c);

//to swap
[a,b,c]=[c,b,a]

console.log(a,b,c);

const [,,...a1]=[1,2,3,4,5]

console.log("to slice array using destructuring",a1);
let eng = ` ${oio.greeting.hello} how are you?
hope u are fine ${oio.wishing.cong}`

console.log(eng);
