# Control Flow in JavaScript

Control flow is the order in which the computer executes statements in a script. Code runs from the first line to the last line, unless it encounters structures that change the control flow, such as conditionals and loops.

## Conditional Statements

### if Statement

The `if` statement executes a block of code if a specified condition is true.

```javascript
const age = 18;

if (age >= 18) {
  console.log("You are an adult");
}
// Output: You are an adult
```

### if...else Statement

The `else` clause executes when the `if` condition is false.

```javascript
const temperature = 15;

if (temperature > 25) {
  console.log("It's hot outside");
} else {
  console.log("It's cool outside");
}
// Output: It's cool outside
```

### if...else if...else Statement

Chain multiple conditions together.

```javascript
const score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// Output: Grade: C
```

### Ternary Operator

A shorthand for simple if...else statements.

```javascript
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // Output: adult

// Can be chained (but be careful with readability)
const score = 85;
const grade = score >= 90 ? "A" :
              score >= 80 ? "B" :
              score >= 70 ? "C" : "F";
console.log(grade); // Output: B
```

### switch Statement

Evaluates an expression and executes code based on matching cases.

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("End of the work week");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek day");
}
// Output: Start of the work week
```

**Important:**
- Always use `break` to prevent fall-through (unless intentional)
- Use `default` for handling unmatched cases
- Switch uses strict equality (`===`)

```javascript
// Example without break (fall-through)
const num = 2;
switch (num) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
  default:
    console.log("Default");
}
// Output: Two
//         Three
//         Default
```

## Loops

### for Loop

The most common loop, typically used when you know how many times you want to iterate.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4

// Iterating through an array
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output: apple banana orange
```

### while Loop

Executes as long as the condition is true. Useful when you don't know the exact number of iterations.

```javascript
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
// Output: 0 1 2 3 4

// Careful with infinite loops!
// while (true) {
//   console.log("This runs forever!");
// }
```

### do...while Loop

Similar to while, but **always executes at least once** because the condition is checked after the code block.

```javascript
let num = 0;

do {
  console.log(num);
  num++;
} while (num < 5);
// Output: 0 1 2 3 4

// Executes at least once even if condition is false
let x = 10;
do {
  console.log(x);
  x++;
} while (x < 5);
// Output: 10
```

### for...in Loop

Iterates over the **enumerable properties** of an object (or array indices).

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 30
// city: New York

// With arrays (iterates over indices)
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(`${index}: ${colors[index]}`);
}
// Output:
// 0: red
// 1: green
// 2: blue
```

**Note:** `for...in` is generally not recommended for arrays. Use `for...of` instead.

### for...of Loop (ES6)

Iterates over **iterable objects** (arrays, strings, Maps, Sets, etc.).

```javascript
const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple banana orange

// With strings
const name = "Alice";
for (let char of name) {
  console.log(char);
}
// Output: A l i c e

// With Sets
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
for (let num of uniqueNumbers) {
  console.log(num);
}
// Output: 1 2 3 4 5
```

### for...in vs for...of

```javascript
const array = ["a", "b", "c"];

// for...in iterates over indices (keys)
for (let index in array) {
  console.log(index); // Output: 0 1 2
}

// for...of iterates over values
for (let value of array) {
  console.log(value); // Output: a b c
}
```

## Loop Control Statements

### break

Exits the loop immediately.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i is 5
  }
  console.log(i);
}
// Output: 0 1 2 3 4

// Finding first matching element
const numbers = [1, 3, 5, 7, 8, 9];
for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(`First even number: ${num}`);
    break;
  }
}
// Output: First even number: 8
```

### continue

Skips the current iteration and continues with the next one.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip when i is 2
  }
  console.log(i);
}
// Output: 0 1 3 4

// Skipping even numbers
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// Output: 1 3 5 7 9
```

### Labels (with break and continue)

Labels allow you to break or continue outer loops from within nested loops.

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Breaks the outer loop
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
// Output:
// i: 0, j: 0
// i: 0, j: 1
// i: 0, j: 2
// i: 1, j: 0

// With continue
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue outer; // Continues outer loop
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
// Output:
// i: 0, j: 0
// i: 1, j: 0
// i: 2, j: 0
```

## Truthy and Falsy Values

In JavaScript, values are coerced to boolean in conditional contexts.

### Falsy Values
These values evaluate to `false` in a boolean context:
- `false`
- `0`
- `-0`
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Truthy Values
Everything else is truthy, including:
- `true`
- Any non-zero number
- Any non-empty string
- Objects (including empty objects `{}` and arrays `[]`)
- Functions

```javascript
// Falsy examples
if (0) {
  console.log("Won't print");
}

if ("") {
  console.log("Won't print");
}

if (null) {
  console.log("Won't print");
}

// Truthy examples
if (1) {
  console.log("Will print"); // Output: Will print
}

if ("hello") {
  console.log("Will print"); // Output: Will print
}

if ([]) {
  console.log("Empty array is truthy!"); // Output: Empty array is truthy!
}

if ({}) {
  console.log("Empty object is truthy!"); // Output: Empty object is truthy!
}
```

## Short-Circuit Evaluation

Logical operators can be used for control flow.

### && (AND) Operator

Returns the first falsy value or the last value if all are truthy.

```javascript
const user = { name: "Alice" };

// Only executes if user exists
user && console.log(user.name); // Output: Alice

// Short-circuit evaluation
const result = false && "This won't be evaluated";
console.log(result); // Output: false

const result2 = true && "This will be returned";
console.log(result2); // Output: This will be returned
```

### || (OR) Operator

Returns the first truthy value or the last value if all are falsy.

```javascript
const username = null;
const defaultName = "Guest";

const displayName = username || defaultName;
console.log(displayName); // Output: Guest

// Multiple fallbacks
const name = "" || null || undefined || "Default";
console.log(name); // Output: Default
```

### Nullish Coalescing Operator (??) - ES2020

Returns the right operand when the left is `null` or `undefined` (but not other falsy values).

```javascript
const count = 0;

// Using || (wrong for this case)
console.log(count || 10); // Output: 10 (0 is falsy)

// Using ?? (correct)
console.log(count ?? 10); // Output: 0 (0 is not null/undefined)

const name = null;
console.log(name ?? "Guest"); // Output: Guest
```

## Optional Chaining (?.) - ES2020

Safely access nested properties without checking each level.

```javascript
const user = {
  name: "Alice",
  address: {
    city: "New York"
  }
};

// Without optional chaining
if (user && user.address && user.address.city) {
  console.log(user.address.city);
}

// With optional chaining
console.log(user?.address?.city); // Output: New York
console.log(user?.phone?.number); // Output: undefined (no error)

// With arrays
const users = [{ name: "Alice" }];
console.log(users?.[0]?.name); // Output: Alice
console.log(users?.[1]?.name); // Output: undefined

// With function calls
const obj = {};
obj.someMethod?.(); // No error if someMethod doesn't exist
```

## Best Practices

1. **Use `for...of` for arrays** instead of `for...in`
2. **Use `===` for comparisons** (strict equality) instead of `==`
3. **Avoid deeply nested conditions** - use early returns or guard clauses
4. **Use switch for multiple conditions** on the same variable
5. **Be explicit with truthy/falsy checks** when it matters

```javascript
// Bad: Deeply nested
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        // do something
      }
    }
  }
}

// Good: Guard clauses
function processUser(user) {
  if (!user) return;
  if (!user.isActive) return;
  if (!user.hasPermission) return;

  // do something
}
```

Understanding control flow is essential for writing logic in your JavaScript programs!
