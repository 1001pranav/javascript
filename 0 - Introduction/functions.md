# Functions in JavaScript

Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task.

## Function Declaration

A function declaration defines a named function using the `function` keyword.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

**Key Points:**
- Function declarations are **hoisted** - you can call them before they're defined in the code
- They create a named function that can be referenced throughout its scope

```javascript
// This works due to hoisting
console.log(add(5, 3)); // Output: 8

function add(a, b) {
  return a + b;
}
```

## Function Expression

A function expression defines a function as part of a larger expression syntax (typically assigning it to a variable).

```javascript
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // Output: 20
```

**Key Points:**
- Function expressions are **NOT hoisted**
- They can be anonymous or named
- Useful for passing functions as arguments

```javascript
// This will throw an error
console.log(subtract(10, 5)); // ReferenceError: Cannot access 'subtract' before initialization

const subtract = function(a, b) {
  return a - b;
};
```

## Arrow Functions (ES6)

Arrow functions provide a shorter syntax for writing function expressions. They were introduced in ES6.

```javascript
// Basic syntax
const square = (num) => {
  return num * num;
};

// Concise syntax (implicit return)
const cube = num => num * num * num;

// Multiple parameters
const sum = (a, b) => a + b;

// No parameters
const greet = () => console.log("Hello!");

console.log(square(5));  // Output: 25
console.log(cube(3));    // Output: 27
console.log(sum(10, 5)); // Output: 15
```

**Key Differences from Regular Functions:**
1. **No `this` binding** - Arrow functions don't have their own `this` context
2. **No `arguments` object**
3. **Cannot be used as constructors**
4. **Implicit return** for single expressions

```javascript
// 'this' binding difference
const person = {
  name: "John",
  regularFunction: function() {
    console.log("Regular:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow:", this.name);
  }
};

person.regularFunction(); // Output: Regular: John
person.arrowFunction();   // Output: Arrow: undefined (or global context)
```

## Immediately Invoked Function Expression (IIFE)

An IIFE is a function that runs as soon as it's defined.

```javascript
(function() {
  console.log("This runs immediately!");
})();

// With parameters
(function(name) {
  console.log(`Hello, ${name}!`);
})("World");

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE");
})();
```

**Use Cases:**
- Creating private scope
- Avoiding global namespace pollution
- Module pattern (before ES6 modules)

## Default Parameters

You can assign default values to function parameters (ES6 feature).

```javascript
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet());                    // Output: Hello, Guest!
console.log(greet("Alice"));             // Output: Hello, Alice!
console.log(greet("Bob", "Hi"));         // Output: Hi, Bob!
```

## Rest Parameters

Rest parameters allow you to represent an indefinite number of arguments as an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // Output: 6
console.log(sum(1, 2, 3, 4, 5));  // Output: 15
```

## Callback Functions

A callback is a function passed as an argument to another function.

```javascript
function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}

processUserInput(function(name) {
  console.log(`Hello, ${name}!`);
}); // Output: Hello, Alice!

// With arrow function
processUserInput(name => console.log(`Hi, ${name}!`)); // Output: Hi, Alice!
```

## Higher-Order Functions

Functions that take other functions as arguments or return functions.

```javascript
// Function that returns a function
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Function that takes a function as argument
function operate(a, b, operation) {
  return operation(a, b);
}

console.log(operate(5, 3, (x, y) => x + y)); // Output: 8
console.log(operate(5, 3, (x, y) => x * y)); // Output: 15
```

## Function Parameters vs Arguments

```javascript
// parameters are defined in function declaration
function example(param1, param2) {
  console.log(param1, param2);
}

// arguments are the actual values passed
example("hello", "world"); // "hello" and "world" are arguments
```

## The `arguments` Object

In regular functions (not arrow functions), `arguments` is an array-like object containing all arguments passed to the function.

```javascript
function showArguments() {
  console.log(arguments);
  console.log(arguments.length);
}

showArguments(1, 2, 3, 4);
// Output: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
// Output: 4

// Note: Arrow functions do NOT have arguments object
const arrowFunc = () => {
  console.log(arguments); // ReferenceError
};
```

## Function Best Practices

1. **Use descriptive names** - Function names should describe what they do
2. **Keep functions small** - Each function should do one thing well
3. **Use arrow functions for callbacks** - Cleaner syntax and lexical `this`
4. **Use default parameters** - Instead of checking for undefined
5. **Avoid side effects** - Pure functions are easier to test and reason about

```javascript
// Good: Pure function with no side effects
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Avoid: Function with side effects
let total = 0;
function addToTotal(amount) {
  total += amount; // Modifying external variable
}
```

## Anonymous Functions

Functions without a name, typically used as callbacks or IIFE.

```javascript
// As a callback
setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);

// Array method callback
[1, 2, 3].forEach(function(num) {
  console.log(num);
});
```

## Named Function Expressions

Function expressions can have names, which is useful for recursion and debugging.

```javascript
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Can use 'fact' for recursion
};

console.log(factorial(5)); // Output: 120
```

## Summary

| Feature | Function Declaration | Function Expression | Arrow Function |
|---------|---------------------|---------------------|----------------|
| Hoisting | ✅ Yes | ❌ No | ❌ No |
| `this` binding | ✅ Yes | ✅ Yes | ❌ No (lexical) |
| `arguments` object | ✅ Yes | ✅ Yes | ❌ No |
| Can be constructor | ✅ Yes | ✅ Yes | ❌ No |
| Implicit return | ❌ No | ❌ No | ✅ Yes (concise) |

Understanding these different types of functions and when to use each is crucial for writing effective JavaScript code.
