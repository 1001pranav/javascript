let objects = {
  property: "Value Pairs",
  "property name": 2,
  name: "Pranav",
  hello() { 
    return `welcome floks!!!! ${this.name} here we can use this function inside object to use its property value`
  }
}
for ( let properties in objects ) {
  console.log("We can also use for loop for printing users", properties, objects[properties])
}

console.log(objects.hello());

function constructorFunction(name, age) {
  this.name = name,
  this.age = age,
  this.default = "Default constructor"
}

let func = new constructorFunction("Pranav", 21);

console.log(func.name)
console.log(func.age);
console.log(func.default);

func.age=22;
console.log("changed age =",func.age);


console.log("we can use hasOwnProperty() on coonstructors too",func.hasOwnProperty("age"));


// we can also use prototype for duplicating value to all constructor
let func2 = new constructorFunction("Vand", 21);

constructorFunction.prototype.type = "Human";

console.log("Using func2",func2.type);
console.log("Using func",func.type);


console.log(`checking the instanceof a function using .constructor ${func2.constructor===constructorFunction} or using instanceof ${func instanceof constructorFunction}` )

for( let object in func ) {
  if ( constructorFunction.hasOwnProperty(object) ) {
    console.log(` ${object} is an Property`);
  } else {
    console.log(` ${object} is an prototype`);
  }
}

console.log(`using .prototype.isPrototypeOf() method `,constructorFunction.prototype.isPrototypeOf(func2));

console.log(constructorFunction.prototype);
function test(){
}

test.prototype = {
  constructor: test,
  country: "India",
  descibe() { 
    console.log(`the country is ${this.country}`); 
  }
};

let func1 = new constructorFunction("uday",25);

console.log(func1);

func1 = Object.create(test.prototype)//inheritence

test.prototype.exam="marks";

var part=new test()

console.log(part.exam);
