# Scope and Closures in JavaScript

Understanding scope and closures is fundamental to mastering JavaScript. These concepts control how variables are accessed and how functions interact with their surrounding environment.

## What is Scope?

**Scope** determines the accessibility (visibility) of variables. It defines where in your code a variable can be accessed or referenced.

### Types of Scope

#### 1. Global Scope

Variables declared outside any function or block have global scope and can be accessed from anywhere in the code.

```javascript
const globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // Can access global variable
}

showGlobal(); // Output: I'm global
console.log(globalVar); // Output: I'm global
```

**Important Notes:**
- Variables declared without `var`, `let`, or `const` become global (avoid this!)
- Global variables are attached to the `window` object in browsers

```javascript
// Bad practice - implicit global
function badPractice() {
  implicitGlobal = "Oops!"; // No var/let/const
}

badPractice();
console.log(implicitGlobal); // Output: Oops! (accessible globally)
```

#### 2. Function Scope

Variables declared inside a function are only accessible within that function.

```javascript
function myFunction() {
  const functionScoped = "I'm inside a function";
  console.log(functionScoped); // Works fine
}

myFunction();
console.log(functionScoped); // ReferenceError: functionScoped is not defined
```

**`var` has function scope:**

```javascript
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Output: 10 (accessible throughout function)
}

testVar();
```

#### 3. Block Scope (ES6+)

Variables declared with `let` and `const` inside a block `{}` are only accessible within that block.

```javascript
{
  let blockScoped = "I'm block scoped";
  const alsoBlockScoped = "Me too";
  console.log(blockScoped); // Works fine
}

console.log(blockScoped); // ReferenceError: blockScoped is not defined
```

**Practical example with if statements:**

```javascript
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}

console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
console.log(z); // Output: 30 (var is function-scoped, not block-scoped)
```

**Loop scoping differences:**

```javascript
// With var (function-scoped)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3 3 3 (all reference same i)

// With let (block-scoped)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Output: 0 1 2 (each iteration has its own j)
```

### Lexical Scope

JavaScript uses **lexical scoping** (also called static scoping), meaning the scope of a variable is determined by its position in the source code.

```javascript
const outerVar = "outer";

function outerFunction() {
  const middleVar = "middle";

  function innerFunction() {
    const innerVar = "inner";
    console.log(innerVar);   // Can access inner
    console.log(middleVar);  // Can access middle (lexical parent)
    console.log(outerVar);   // Can access outer (lexical grandparent)
  }

  innerFunction();
}

outerFunction();
// Output:
// inner
// middle
// outer
```

## Scope Chain

When JavaScript looks for a variable, it searches:
1. Current scope
2. Outer scope
3. Continues up the chain until it reaches global scope
4. If not found, throws a `ReferenceError`

```javascript
const global = "global";

function level1() {
  const level1Var = "level1";

  function level2() {
    const level2Var = "level2";

    function level3() {
      console.log(level2Var); // Found in level2
      console.log(level1Var); // Found in level1
      console.log(global);    // Found in global
    }

    level3();
  }

  level2();
}

level1();
```

## Closures

A **closure** is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has finished executing.

### Basic Closure Example

```javascript
function outerFunction() {
  const outerVar = "I'm from outer function";

  function innerFunction() {
    console.log(outerVar); // Access to outer function's variable
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I'm from outer function
```

**What makes this a closure?**
- `innerFunction` is defined inside `outerFunction`
- `innerFunction` accesses `outerVar` from its parent scope
- `innerFunction` is returned and used outside of `outerFunction`
- Even after `outerFunction` finishes, `innerFunction` still has access to `outerVar`

### Practical Closure Examples

#### 1. Private Variables (Data Encapsulation)

```javascript
function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount());  // Output: 1

// Cannot access count directly
console.log(counter.count); // Output: undefined
```

#### 2. Function Factory

```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));     // Output: 10
console.log(triple(5));     // Output: 15
console.log(quadruple(5));  // Output: 20
```

#### 3. Event Handlers with Closures

```javascript
function setupButtons() {
  const buttons = ['Button 1', 'Button 2', 'Button 3'];

  buttons.forEach((buttonText, index) => {
    // Each iteration creates a closure with its own index
    setTimeout(() => {
      console.log(`${buttonText} clicked at index ${index}`);
    }, 1000 * (index + 1));
  });
}

setupButtons();
// Output (after delays):
// Button 1 clicked at index 0
// Button 2 clicked at index 1
// Button 3 clicked at index 2
```

#### 4. Memoization (Caching)

```javascript
function createMemoizedFunction() {
  const cache = {}; // Private cache

  return function(n) {
    if (n in cache) {
      console.log('Returning cached result');
      return cache[n];
    }

    console.log('Computing result');
    const result = n * n; // Expensive computation
    cache[n] = result;
    return result;
  };
}

const memoizedSquare = createMemoizedFunction();
console.log(memoizedSquare(5)); // Computing result, Output: 25
console.log(memoizedSquare(5)); // Returning cached result, Output: 25
```

### Common Closure Pitfalls

#### Problem: Loop with var

```javascript
// Problem: All functions share the same i
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Output: 3 3 3

// Solution 1: Use let (block-scoped)
for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log(j);
  }, 1000);
}
// Output: 0 1 2

// Solution 2: Use IIFE to create closure
for (var k = 0; k < 3; k++) {
  (function(index) {
    setTimeout(function() {
      console.log(index);
    }, 1000);
  })(k);
}
// Output: 0 1 2
```

### Module Pattern (Closure-Based)

Before ES6 modules, closures were used to create modules:

```javascript
const Calculator = (function() {
  // Private variables and functions
  let result = 0;

  function log(message) {
    console.log(`[Calculator] ${message}`);
  }

  // Public API
  return {
    add(x) {
      result += x;
      log(`Added ${x}, result: ${result}`);
      return this;
    },
    subtract(x) {
      result -= x;
      log(`Subtracted ${x}, result: ${result}`);
      return this;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      log('Reset');
      return this;
    }
  };
})();

Calculator.add(10).add(5).subtract(3);
console.log(Calculator.getResult()); // Output: 12
```

## Execution Context and Scope

Every time a function is called, an **execution context** is created with its own:
1. **Variable Environment** - where variables are stored
2. **Scope Chain** - access to outer variables
3. **`this` binding** - reference to the object

```javascript
let globalVar = "global";

function outer() {
  let outerVar = "outer";

  function inner() {
    let innerVar = "inner";
    console.log(innerVar);  // Own scope
    console.log(outerVar);  // Parent scope (via scope chain)
    console.log(globalVar); // Global scope (via scope chain)
  }

  inner();
}

outer();
```

## Best Practices

1. **Minimize global variables** - Use modules or IIFEs
2. **Use `let` and `const`** - Block scoping prevents bugs
3. **Avoid implicit globals** - Always declare variables
4. **Use closures for privacy** - Encapsulate data
5. **Be aware of memory** - Closures keep references to outer variables
6. **Name your functions** - Easier debugging

```javascript
// Good: Named function in closure
const createGreeter = function createGreeter(greeting) {
  return function greet(name) {
    return `${greeting}, ${name}!`;
  };
};

// Bad: All anonymous functions
const createGreeter = function(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
};
```

## Memory Considerations

Closures can lead to memory leaks if not careful:

```javascript
// Potential memory leak
function createHeavyClosure() {
  const hugeArray = new Array(1000000).fill('data');

  return function() {
    // Even if we don't use hugeArray, it stays in memory
    console.log('Hello');
  };
}

// Better: Only keep what you need
function createOptimizedClosure() {
  const hugeArray = new Array(1000000).fill('data');
  const summary = hugeArray.length; // Keep only summary

  return function() {
    console.log(`Array had ${summary} items`);
  };
}
```

## Interview Questions

**Q: What will this code output?**
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```
**A:** `3 3 3` - All callbacks share the same `i` due to `var` being function-scoped.

**Q: How do you create private variables in JavaScript?**
**A:** Use closures to create private variables that are accessible only through returned functions.

**Q: What's the difference between scope and context?**
**A:** Scope refers to variable accessibility. Context refers to the value of `this` in a function.

## Summary

- **Scope** determines variable accessibility
- **Global, Function, and Block** are the three main scope types
- **Lexical scoping** means inner functions access outer variables
- **Closures** are functions that remember their lexical scope
- **Closures enable** data privacy, function factories, and functional programming patterns
- Use `let`/`const` for block scoping, avoid `var`

Mastering scope and closures is essential for writing clean, efficient JavaScript code!
