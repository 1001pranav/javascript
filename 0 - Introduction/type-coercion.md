# Type Coercion in JavaScript

Type coercion is the automatic or implicit conversion of values from one data type to another. Understanding coercion is crucial for avoiding bugs and writing predictable JavaScript code.

## What is Type Coercion?

JavaScript is a **loosely typed** (or dynamically typed) language. Variables don't have types—values do. JavaScript can automatically convert values between different types when needed.

### Types of Conversion

1. **Implicit Coercion** - JavaScript automatically converts types
2. **Explicit Conversion** - You manually convert types

## Implicit Coercion

### String Coercion

When using the `+` operator with a string, JavaScript converts other values to strings.

```javascript
// Number to String
console.log("Hello" + 5);          // "Hello5"
console.log("Number: " + 42);      // "Number: 42"
console.log("5" + 10);             // "510" (concatenation, not addition)

// Boolean to String
console.log("Value: " + true);     // "Value: true"
console.log("Value: " + false);    // "Value: false"

// Null and Undefined to String
console.log("Value: " + null);     // "Value: null"
console.log("Value: " + undefined); // "Value: undefined"

// Object to String
console.log("Object: " + {});      // "Object: [object Object]"
console.log("Array: " + [1, 2, 3]); // "Array: 1,2,3"
```

### Number Coercion

Most mathematical operators (except `+`) convert values to numbers.

```javascript
// String to Number
console.log("5" - 2);          // 3
console.log("10" * "2");       // 20
console.log("20" / "4");       // 5
console.log("15" % "4");       // 3

// Unary + operator
console.log(+"42");            // 42
console.log(+"3.14");          // 3.14
console.log(+"hello");         // NaN

// Boolean to Number
console.log(true + 1);         // 2
console.log(false + 1);        // 1
console.log(true * 5);         // 5

// Null to Number
console.log(null + 5);         // 5 (null becomes 0)

// Undefined to Number
console.log(undefined + 5);    // NaN

// Array to Number
console.log([5] - 2);          // 3 ([5] becomes 5)
console.log([1, 2] - 2);       // NaN
```

### Boolean Coercion

Values are converted to boolean in logical contexts (if statements, logical operators).

**Falsy values** (convert to `false`):
- `false`
- `0`
- `-0`
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Truthy values** (everything else):
- All objects `{}`
- All arrays `[]` (even empty!)
- All non-empty strings `"0"`, `"false"`
- All non-zero numbers

```javascript
// Falsy examples
if (0) console.log("Won't run");
if ("") console.log("Won't run");
if (null) console.log("Won't run");
if (undefined) console.log("Won't run");
if (NaN) console.log("Won't run");

// Truthy examples
if (1) console.log("Will run");
if ("0") console.log("Will run");        // String "0" is truthy!
if ("false") console.log("Will run");    // String "false" is truthy!
if ([]) console.log("Will run");         // Empty array is truthy!
if ({}) console.log("Will run");         // Empty object is truthy!

// Logical NOT (!!) converts to boolean
console.log(!!"");         // false
console.log(!!0);          // false
console.log(!!"hello");    // true
console.log(!!42);         // true
console.log(!![]);         // true
```

## Explicit Conversion

### To String

```javascript
// String() constructor
console.log(String(123));        // "123"
console.log(String(true));       // "true"
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"

// .toString() method
console.log((123).toString());   // "123"
console.log(true.toString());    // "true"
console.log([1, 2, 3].toString()); // "1,2,3"

// Template literals
console.log(`${123}`);           // "123"
console.log(`${true}`);          // "true"
```

### To Number

```javascript
// Number() constructor
console.log(Number("123"));      // 123
console.log(Number("12.34"));    // 12.34
console.log(Number(""));         // 0 (empty string becomes 0)
console.log(Number(" "));        // 0 (whitespace becomes 0)
console.log(Number("hello"));    // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

// parseInt() and parseFloat()
console.log(parseInt("123"));       // 123
console.log(parseInt("123.45"));    // 123 (stops at decimal)
console.log(parseInt("123px"));     // 123 (stops at non-digit)
console.log(parseFloat("12.34"));   // 12.34
console.log(parseFloat("12.34px")); // 12.34

// Unary + operator
console.log(+"123");             // 123
console.log(+"12.34");           // 12.34
console.log(+true);              // 1
```

### To Boolean

```javascript
// Boolean() constructor
console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean("hello"));   // true
console.log(Boolean(""));        // false
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

// Double NOT (!!)
console.log(!!1);                // true
console.log(!!0);                // false
console.log(!!"hello");          // true
console.log(!!"");               // false
```

## Comparison Operators

### == (Loose Equality)

The `==` operator performs type coercion before comparison.

```javascript
// Number and String
console.log(5 == "5");           // true (string converted to number)
console.log(0 == "");            // true (empty string converted to 0)
console.log(0 == "0");           // true

// Boolean
console.log(true == 1);          // true (true converted to 1)
console.log(false == 0);         // true (false converted to 0)
console.log(true == "1");        // true
console.log(false == "");        // true

// Null and Undefined
console.log(null == undefined);  // true (special case)
console.log(null == 0);          // false
console.log(undefined == 0);     // false

// Objects
console.log([] == false);        // true (both convert to 0)
console.log([] == 0);            // true
console.log([""] == "");         // true
```

### === (Strict Equality)

The `===` operator does **not** perform type coercion.

```javascript
console.log(5 === "5");          // false (different types)
console.log(0 === "");           // false
console.log(true === 1);         // false
console.log(false === 0);        // false
console.log(null === undefined); // false
console.log([] === false);       // false

// Only returns true if type AND value are the same
console.log(5 === 5);            // true
console.log("hello" === "hello"); // true
console.log(true === true);      // true
```

**Best Practice:** Always use `===` unless you specifically need type coercion.

## Common Pitfalls

### Pitfall 1: String Concatenation vs Addition

```javascript
console.log("2" + "2");     // "22" (string concatenation)
console.log("2" + 2);       // "22" (number converted to string)
console.log(2 + "2");       // "22"
console.log(2 + 2);         // 4 (number addition)

// Order matters!
console.log(1 + 2 + "3");   // "33" (1+2=3, then 3+"3"="33")
console.log("1" + 2 + 3);   // "123" ("1"+2="12", "12"+3="123")
```

### Pitfall 2: Comparing Arrays and Objects

```javascript
console.log([] == []);       // false (different object references)
console.log({} == {});       // false
console.log([] == false);    // true (coerced to 0)
console.log(!![]);           // true (truthy)

// This is confusing!
console.log([] == true);     // false ([] becomes "", "" becomes 0, 0 != 1)
console.log([] == false);    // true ([] becomes "", "" becomes 0, 0 == 0)
```

### Pitfall 3: NaN Comparisons

```javascript
console.log(NaN == NaN);     // false
console.log(NaN === NaN);    // false

// Use Number.isNaN() or isNaN()
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN("hello"));    // false (doesn't coerce)
console.log(isNaN("hello"));           // true (coerces first)
```

### Pitfall 4: null and undefined

```javascript
console.log(null == undefined);   // true (special case)
console.log(null === undefined);  // false (different types)

console.log(null == 0);           // false
console.log(null > 0);            // false
console.log(null >= 0);           // true (confusing!)

// null is converted to 0 for comparison operators but not ==
```

### Pitfall 5: Empty String and Zero

```javascript
console.log("" == 0);        // true (both are falsy)
console.log("" === 0);       // false (different types)
console.log(+"");            // 0 (empty string converts to 0)

console.log(" " == 0);       // true (whitespace converts to 0)
console.log(" ".trim() == 0); // true
```

## Object to Primitive Conversion

Objects are converted to primitives using `valueOf()` and `toString()` methods.

```javascript
const obj = {
  valueOf() {
    return 42;
  },
  toString() {
    return "Object";
  }
};

console.log(obj + 0);        // 42 (uses valueOf)
console.log(String(obj));    // "Object" (uses toString)
console.log(obj == 42);      // true

// Arrays
const arr = [1, 2, 3];
console.log(arr.toString());  // "1,2,3"
console.log(arr.valueOf());   // [1, 2, 3]
console.log(arr + "");        // "1,2,3"
```

## Type Coercion with Logical Operators

### && (AND) Operator

Returns the first falsy value or the last value.

```javascript
console.log(0 && "hello");           // 0 (first falsy)
console.log("" && "world");          // "" (first falsy)
console.log("hello" && "world");     // "world" (both truthy, returns last)
console.log(1 && 2 && 3);            // 3 (all truthy, returns last)
console.log(true && false);          // false
console.log(5 && null && "hello");   // null (first falsy)
```

### || (OR) Operator

Returns the first truthy value or the last value.

```javascript
console.log(0 || "hello");           // "hello" (first truthy)
console.log("" || "world");          // "world" (first truthy)
console.log(false || 0 || "");       // "" (all falsy, returns last)
console.log(null || undefined || 0); // 0 (all falsy, returns last)
console.log("" || 0 || "default");   // "default" (first truthy)

// Common pattern: default values
const userInput = "";
const value = userInput || "default";
console.log(value);                  // "default"
```

### ?? (Nullish Coalescing)

Returns right operand only if left is `null` or `undefined`.

```javascript
console.log(0 ?? "default");         // 0 (0 is not null/undefined)
console.log("" ?? "default");        // "" (empty string is not null/undefined)
console.log(null ?? "default");      // "default"
console.log(undefined ?? "default"); // "default"
console.log(false ?? "default");     // false

// Difference from ||
const count = 0;
console.log(count || 10);            // 10 (0 is falsy)
console.log(count ?? 10);            // 0 (0 is not null/undefined)
```

## Coercion Table Summary

| Original Value | to String | to Number | to Boolean |
|----------------|-----------|-----------|------------|
| `undefined` | `"undefined"` | `NaN` | `false` |
| `null` | `"null"` | `0` | `false` |
| `true` | `"true"` | `1` | `true` |
| `false` | `"false"` | `0` | `false` |
| `0` | `"0"` | `0` | `false` |
| `1` | `"1"` | `1` | `true` |
| `""` | `""` | `0` | `false` |
| `"0"` | `"0"` | `0` | `true` |
| `"123"` | `"123"` | `123` | `true` |
| `"abc"` | `"abc"` | `NaN` | `true` |
| `[]` | `""` | `0` | `true` |
| `[1,2,3]` | `"1,2,3"` | `NaN` | `true` |
| `{}` | `"[object Object]"` | `NaN` | `true` |

## Best Practices

1. **Use `===` instead of `==`** - Avoid unexpected coercion
2. **Be explicit with conversions** - Use `Number()`, `String()`, `Boolean()`
3. **Understand truthy/falsy** - Know what converts to false
4. **Use `Number.isNaN()`** instead of `isNaN()`
5. **Be careful with `+` operator** - It does both addition and concatenation
6. **Use `??` for default values** - When 0 and "" are valid
7. **Avoid comparing different types** - Convert first if needed

```javascript
// Bad
if (value == "0") { /* ... */ }

// Good
if (String(value) === "0") { /* ... */ }
// or
if (value === "0") { /* ... */ }
```

## Interview Questions

**Q: What's the difference between `==` and `===`?**
**A:** `==` performs type coercion before comparison, `===` does not. `===` checks both type and value.

**Q: Why is `[] == false` true but `!! []` also true?**
**A:** `[] == false`: both sides coerce to 0. `!![]`: empty array is truthy, so `![]` is false, and `!![]` is true.

**Q: What's the output of `"2" + "2" - "2"`?**
**A:** `20`. `"2" + "2"` becomes `"22"` (string), then `"22" - "2"` becomes `22 - 2 = 20` (number).

## Summary

- **Type coercion** converts values between types automatically or explicitly
- **Implicit coercion** happens automatically (can be confusing)
- **Explicit conversion** is clearer and safer
- **`==` performs coercion**, `===` does not
- **Understand truthy/falsy** values to avoid bugs
- **Be explicit** with type conversions for readable code

Understanding type coercion is essential for writing bug-free JavaScript code!
