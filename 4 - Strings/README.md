# Strings in JavaScript

Strings are one of the most commonly used data types in JavaScript. They represent textual data and come with many built-in methods for manipulation.

## Creating Strings

### String Literals

```javascript
// Single quotes
const single = 'Hello World';

// Double quotes
const double = "Hello World";

// Template literals (ES6) - backticks
const template = `Hello World`;

// All are equivalent
console.log(single === double); // true
console.log(double === template); // true
```

### Template Literals (Template Strings)

Template literals allow embedded expressions and multi-line strings.

```javascript
const name = "Alice";
const age = 30;

// String interpolation
const greeting = `Hello, my name is ${name} and I'm ${age} years old`;
console.log(greeting); // Hello, my name is Alice and I'm 30 years old

// Expressions
const price = 29.99;
const tax = 0.1;
console.log(`Total: $${(price * (1 + tax)).toFixed(2)}`); // Total: $32.99

// Multi-line strings
const multiLine = `
  This is a
  multi-line
  string
`;
console.log(multiLine);
```

### String Constructor

```javascript
const strObj = new String("Hello");
console.log(typeof strObj);        // object
console.log(strObj instanceof String); // true

const strPrimitive = "Hello";
console.log(typeof strPrimitive);  // string

// Prefer primitives over objects
console.log(strObj == strPrimitive);  // true (value comparison)
console.log(strObj === strPrimitive); // false (different types)
```

## String Properties

### length

Returns the number of characters in a string.

```javascript
const text = "Hello World";
console.log(text.length); // 11

const emoji = "Hello 👋";
console.log(emoji.length); // 8 (emoji counts as 2)

const empty = "";
console.log(empty.length); // 0
```

## Accessing Characters

### Bracket Notation

```javascript
const str = "Hello";
console.log(str[0]);  // "H"
console.log(str[1]);  // "e"
console.log(str[4]);  // "o"
console.log(str[10]); // undefined
```

### charAt()

```javascript
const str = "Hello";
console.log(str.charAt(0));  // "H"
console.log(str.charAt(1));  // "e"
console.log(str.charAt(10)); // "" (empty string, not undefined)
```

### charCodeAt()

Returns the Unicode value of the character.

```javascript
console.log("A".charCodeAt(0));     // 65
console.log("a".charCodeAt(0));     // 97
console.log("Hello".charCodeAt(0)); // 72 (H)
```

### codePointAt() (ES6)

Better for Unicode characters (including emojis).

```javascript
console.log("A".codePointAt(0));  // 65
console.log("👋".codePointAt(0)); // 128075
```

## String Methods

### Searching and Finding

#### indexOf()

Returns the first index where substring is found, or -1 if not found.

```javascript
const text = "Hello World, Hello Universe";

console.log(text.indexOf("Hello"));      // 0
console.log(text.indexOf("World"));      // 6
console.log(text.indexOf("Hello", 5));   // 13 (start searching from index 5)
console.log(text.indexOf("Goodbye"));    // -1 (not found)

// Check if substring exists
if (text.indexOf("World") !== -1) {
  console.log("Found World!");
}
```

#### lastIndexOf()

Returns the last index where substring is found.

```javascript
const text = "Hello World, Hello Universe";

console.log(text.lastIndexOf("Hello"));  // 13
console.log(text.lastIndexOf("Hello", 10)); // 0 (search backwards from index 10)
```

#### includes() (ES6)

Returns true if substring exists, false otherwise.

```javascript
const text = "Hello World";

console.log(text.includes("World"));     // true
console.log(text.includes("world"));     // false (case-sensitive)
console.log(text.includes("Hello", 5));  // false (start from index 5)
```

#### startsWith() (ES6)

Checks if string starts with specified substring.

```javascript
const text = "Hello World";

console.log(text.startsWith("Hello"));   // true
console.log(text.startsWith("World"));   // false
console.log(text.startsWith("World", 6)); // true (check from index 6)
```

#### endsWith() (ES6)

Checks if string ends with specified substring.

```javascript
const text = "Hello World";

console.log(text.endsWith("World"));     // true
console.log(text.endsWith("Hello"));     // false
console.log(text.endsWith("Hello", 5));  // true (check first 5 characters)
```

#### search()

Searches using a regular expression.

```javascript
const text = "Hello World 123";

console.log(text.search("World"));       // 6
console.log(text.search(/\d+/));         // 12 (first number)
console.log(text.search(/goodbye/i));    // -1 (not found)
```

### Extracting Parts

#### slice()

Extracts a section of a string.

```javascript
const text = "Hello World";

console.log(text.slice(0, 5));    // "Hello"
console.log(text.slice(6));       // "World"
console.log(text.slice(6, 11));   // "World"
console.log(text.slice(-5));      // "World" (last 5 characters)
console.log(text.slice(-5, -1));  // "Worl"
```

#### substring()

Similar to slice(), but doesn't support negative indices.

```javascript
const text = "Hello World";

console.log(text.substring(0, 5));   // "Hello"
console.log(text.substring(6));      // "World"
console.log(text.substring(6, 11));  // "World"

// Negative values treated as 0
console.log(text.substring(-5));     // "Hello World"

// Swaps if start > end
console.log(text.substring(5, 0));   // "Hello"
```

#### substr() (Deprecated)

Extracts a substring starting at a specified position for a specified length.

```javascript
const text = "Hello World";

console.log(text.substr(0, 5));   // "Hello"
console.log(text.substr(6, 5));   // "World"
console.log(text.substr(-5, 3));  // "Wor"

// Note: Deprecated, use slice() instead
```

### Case Conversion

```javascript
const text = "Hello World";

console.log(text.toUpperCase());     // "HELLO WORLD"
console.log(text.toLowerCase());     // "hello world"

// Locale-specific (Turkish example)
console.log("İstanbul".toLocaleLowerCase("tr-TR")); // "istanbul"
console.log("istanbul".toLocaleUpperCase("tr-TR")); // "İSTANBUL"
```

### Trimming Whitespace

```javascript
const text = "   Hello World   ";

console.log(text.trim());        // "Hello World"
console.log(text.trimStart());   // "Hello World   " (ES2019)
console.log(text.trimLeft());    // "Hello World   " (alias)
console.log(text.trimEnd());     // "   Hello World" (ES2019)
console.log(text.trimRight());   // "   Hello World" (alias)
```

### Padding (ES2017)

```javascript
const text = "5";

console.log(text.padStart(3, "0"));     // "005"
console.log(text.padEnd(3, "0"));       // "500"

// Credit card example
const last4 = "1234";
console.log(last4.padStart(16, "*"));   // "************1234"

// Time formatting
const hour = "9";
const minute = "5";
console.log(`${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`); // "09:05"
```

### Repeating

```javascript
console.log("Ha".repeat(3));         // "HaHaHa"
console.log("*".repeat(10));         // "**********"
console.log("Hello ".repeat(3));     // "Hello Hello Hello "

// Creating dividers
console.log("=".repeat(50));         // ==================================================
```

### Replacing

#### replace()

Replaces the first occurrence.

```javascript
const text = "Hello World, Hello Universe";

console.log(text.replace("Hello", "Hi"));           // "Hi World, Hello Universe"
console.log(text.replace(/Hello/, "Hi"));           // "Hi World, Hello Universe"
console.log(text.replace(/Hello/g, "Hi"));          // "Hi World, Hi Universe" (global)
console.log(text.replace(/hello/i, "Hi"));          // "Hi World, Hello Universe" (case-insensitive)
console.log(text.replace(/hello/gi, "Hi"));         // "Hi World, Hi Universe" (global + case-insensitive)

// With callback function
const replaced = "I have 2 apples and 3 oranges".replace(/\d+/g, (match) => {
  return parseInt(match) * 2;
});
console.log(replaced); // "I have 4 apples and 6 oranges"
```

#### replaceAll() (ES2021)

Replaces all occurrences without needing regex.

```javascript
const text = "Hello World, Hello Universe";

console.log(text.replaceAll("Hello", "Hi")); // "Hi World, Hi Universe"

// With regex (must have 'g' flag)
console.log(text.replaceAll(/Hello/g, "Hi")); // "Hi World, Hi Universe"
```

### Splitting and Joining

#### split()

Splits a string into an array.

```javascript
const text = "apple,banana,orange";
console.log(text.split(","));        // ["apple", "banana", "orange"]

const sentence = "Hello World";
console.log(sentence.split(" "));    // ["Hello", "World"]
console.log(sentence.split(""));     // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// With limit
console.log(text.split(",", 2));     // ["apple", "banana"]

// CSV parsing
const csv = "name,age,city\nAlice,30,NYC\nBob,25,LA";
const lines = csv.split("\n");
const headers = lines[0].split(",");
console.log(headers);                // ["name", "age", "city"]
```

### Concatenation

#### concat()

```javascript
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));        // "Hello World"
console.log(str1.concat(" ", str2, "!"));   // "Hello World!"

// Template literals are preferred
console.log(`${str1} ${str2}!`);           // "Hello World!"
```

### Comparison

#### localeCompare()

Compares strings in the current locale.

```javascript
console.log("a".localeCompare("b"));     // -1 (a comes before b)
console.log("b".localeCompare("a"));     // 1 (b comes after a)
console.log("a".localeCompare("a"));     // 0 (equal)

// Sorting array of strings
const names = ["Zoë", "Zoe", "Alice", "Bob"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);                      // ["Alice", "Bob", "Zoe", "Zoë"]
```

### Matching

#### match()

Matches against a regular expression.

```javascript
const text = "The price is $29.99 and $39.99";

console.log(text.match(/\d+\.\d+/));     // ["29.99"] (first match)
console.log(text.match(/\d+\.\d+/g));    // ["29.99", "39.99"] (all matches)

// With capture groups
const email = "user@example.com";
const match = email.match(/(.+)@(.+)\.(.+)/);
console.log(match[1]); // "user"
console.log(match[2]); // "example"
console.log(match[3]); // "com"
```

#### matchAll() (ES2020)

Returns an iterator of all matches.

```javascript
const text = "test1 test2 test3";
const matches = text.matchAll(/test(\d)/g);

for (const match of matches) {
  console.log(`Found: ${match[0]}, number: ${match[1]}`);
}
// Output:
// Found: test1, number: 1
// Found: test2, number: 2
// Found: test3, number: 3
```

## Regular Expressions with Strings

### test()

Tests if a pattern exists in a string.

```javascript
const pattern = /\d+/;
console.log(pattern.test("abc123"));  // true
console.log(pattern.test("abc"));     // false
```

### exec()

Executes a search for a match.

```javascript
const pattern = /(\d+)-(\d+)-(\d+)/;
const result = pattern.exec("Date: 2024-01-15");

if (result) {
  console.log(result[0]); // "2024-01-15"
  console.log(result[1]); // "2024"
  console.log(result[2]); // "01"
  console.log(result[3]); // "15"
}
```

## String Immutability

Strings in JavaScript are **immutable** - they cannot be changed after creation.

```javascript
let str = "Hello";
str[0] = "J"; // This doesn't work!
console.log(str); // Still "Hello"

// To "change" a string, create a new one
str = "J" + str.slice(1);
console.log(str); // "Jello"

// String methods always return new strings
const original = "hello";
const upper = original.toUpperCase();
console.log(original); // "hello" (unchanged)
console.log(upper);    // "HELLO" (new string)
```

## Common String Patterns

### Checking if String is Empty

```javascript
const str = "";

// These all work
if (str === "") { /* ... */ }
if (str.length === 0) { /* ... */ }
if (!str) { /* ... */ }
```

### Reversing a String

```javascript
const str = "Hello";
const reversed = str.split("").reverse().join("");
console.log(reversed); // "olleH"

// Or using spread operator
const reversed2 = [...str].reverse().join("");
console.log(reversed2); // "olleH"
```

### Counting Character Occurrences

```javascript
const text = "Hello World";
const char = "l";

const count = text.split(char).length - 1;
console.log(count); // 3

// Or with regex
const count2 = (text.match(/l/g) || []).length;
console.log(count2); // 3
```

### Capitalizing First Letter

```javascript
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hello"));     // "Hello"
console.log(capitalize("HELLO"));     // "Hello"
console.log(capitalize("hELLO"));     // "Hello"
```

### Title Case

```javascript
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(titleCase("hello world"));      // "Hello World"
console.log(titleCase("the quick brown fox")); // "The Quick Brown Fox"
```

### Truncating Strings

```javascript
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}

console.log(truncate("Hello World", 8));    // "Hello..."
console.log(truncate("Hi", 10));            // "Hi"
```

### Checking for Palindrome

```javascript
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("racecar"));                     // true
console.log(isPalindrome("hello"));                       // false
```

## Performance Tips

1. **Use template literals** for string concatenation instead of `+`
2. **Use `includes()`** instead of `indexOf() !== -1`
3. **Use `startsWith()`/`endsWith()`** instead of substring checks
4. **Avoid creating unnecessary string objects** with `new String()`
5. **For large concatenations**, use array `join()` or template literals

```javascript
// Slow (creates many intermediate strings)
let result = "";
for (let i = 0; i < 1000; i++) {
  result += i + " ";
}

// Fast (creates array then joins once)
const parts = [];
for (let i = 0; i < 1000; i++) {
  parts.push(i);
}
const result2 = parts.join(" ");
```

## Summary

- Strings are **immutable** primitive values
- **Template literals** allow interpolation and multi-line strings
- Many methods for **searching, extracting, and transforming** strings
- String methods **always return new strings** (immutability)
- **Regular expressions** provide powerful pattern matching
- Use modern methods like `includes()`, `startsWith()`, `endsWith()` for cleaner code

Mastering string manipulation is essential for any JavaScript developer!
