//import {test} from './basic_js.js';
//type="module" in script tag of html is nessasry to work
/*
class className{
  constructor(constName){
    this.constName=constName
  }
}
let classes = new className("exampleConstructor")
console.log(classes.constName)
//console.log(test(100));*/
const makePromise = new Promise((resolve, reject) => {
    var data="hi";
    
  if ( false ) {
  } else {
    reject(data)
  }
});

makePromise.then(result=>{
  console.log(result)
});
makePromise.catch(error=>{
  console.log("Oh ho",error);
});
