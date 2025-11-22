# JavaScript Modules

Modules allow you to break your code into separate files, making it more organized, maintainable, and reusable. JavaScript supports multiple module systems.

## Why Modules?

**Benefits:**
- **Code Organization** - Split large codebase into manageable files
- **Reusability** - Use code across different parts of your application
- **Encapsulation** - Keep implementation details private
- **Dependency Management** - Clearly define what each module needs
- **Namespace Management** - Avoid naming conflicts

## ES6 Modules (ESM)

ES6 introduced native module support with `import` and `export` keywords. This is the modern standard.

### Basic Export and Import

#### Named Exports

```javascript
// math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export class Calculator {
  multiply(a, b) {
    return a * b;
  }
}

// Or export all at once
const divide = (a, b) => a / b;
const modulo = (a, b) => a % b;

export { divide, modulo };
```

```javascript
// main.js
import { PI, add, subtract, Calculator } from "./math.js";

console.log(PI);              // 3.14159
console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6

const calc = new Calculator();
console.log(calc.multiply(4, 5)); // 20
```

#### Default Export

Each module can have one default export.

```javascript
// user.js
export default class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

// Or with functions
export default function greet(name) {
  return `Hello, ${name}!`;
}

// Or with objects
export default {
  name: "Config",
  version: "1.0.0"
};
```

```javascript
// main.js
import User from "./user.js";
// Can use any name when importing default export
import MyUser from "./user.js";

const user = new User("Alice");
console.log(user.greet()); // Hello, I'm Alice
```

#### Mixing Default and Named Exports

```javascript
// utils.js
export default function formatDate(date) {
  return date.toISOString();
}

export function formatTime(date) {
  return date.toLocaleTimeString();
}

export const API_URL = "https://api.example.com";
```

```javascript
// main.js
import formatDate, { formatTime, API_URL } from "./utils.js";

console.log(formatDate(new Date()));
console.log(formatTime(new Date()));
console.log(API_URL);
```

### Import Variations

#### Import All as Namespace

```javascript
// math.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
```

```javascript
// main.js
import * as Math from "./math.js";

console.log(Math.PI);           // 3.14159
console.log(Math.add(5, 3));    // 8
console.log(Math.subtract(10, 4)); // 6
```

#### Renaming Imports

```javascript
// main.js
import { add as sum, subtract as diff } from "./math.js";

console.log(sum(5, 3));  // 8
console.log(diff(10, 4)); // 6
```

#### Renaming Exports

```javascript
// math.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

export { add as sum, subtract as difference };
```

```javascript
// main.js
import { sum, difference } from "./math.js";
```

#### Import for Side Effects Only

```javascript
// polyfills.js
// This file just runs code when imported
Array.prototype.myCustomMethod = function() {
  // ...
};

console.log("Polyfills loaded");
```

```javascript
// main.js
import "./polyfills.js"; // Executes the file, doesn't import anything
```

### Re-exporting

Useful for creating barrel files (index.js).

```javascript
// shapes/circle.js
export class Circle {}

// shapes/square.js
export class Square {}

// shapes/triangle.js
export class Triangle {}

// shapes/index.js (barrel file)
export { Circle } from "./circle.js";
export { Square } from "./square.js";
export { Triangle } from "./triangle.js";

// Or export all
export * from "./circle.js";
export * from "./square.js";
export * from "./triangle.js";
```

```javascript
// main.js
// Import from single entry point
import { Circle, Square, Triangle } from "./shapes/index.js";
// Or just
import { Circle, Square, Triangle } from "./shapes";
```

### Dynamic Imports

Import modules conditionally or on-demand (returns a Promise).

```javascript
// Static import (loaded at parse time)
import { heavy Function } from "./heavy-module.js";

// Dynamic import (loaded at runtime)
button.addEventListener("click", async () => {
  const module = await import("./heavy-module.js");
  module.heavyFunction();
});

// With destructuring
button.addEventListener("click", async () => {
  const { heavyFunction } = await import("./heavy-module.js");
  heavyFunction();
});

// Conditional loading
if (condition) {
  const module = await import("./module-a.js");
} else {
  const module = await import("./module-b.js");
}

// With error handling
try {
  const module = await import("./module.js");
  module.doSomething();
} catch (error) {
  console.error("Failed to load module:", error);
}
```

### Top-Level Await (ES2022)

Use `await` at the top level in modules.

```javascript
// config.js
const response = await fetch("/api/config");
const config = await response.json();

export default config;
```

```javascript
// main.js
import config from "./config.js";

console.log(config); // Config is already loaded
```

## CommonJS (Node.js)

CommonJS is the module system traditionally used in Node.js.

### Basic Exports and Require

#### exports and module.exports

```javascript
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Method 1: exports object
exports.add = add;
exports.subtract = subtract;
exports.PI = 3.14159;

// Method 2: module.exports (replaces entire export)
module.exports = {
  add,
  subtract,
  PI: 3.14159
};

// Method 3: Export single item
module.exports = add;

// Method 4: Export class
module.exports = class Calculator {
  add(a, b) {
    return a + b;
  }
};
```

```javascript
// main.js
const math = require("./math");

console.log(math.add(5, 3));    // 8
console.log(math.PI);           // 3.14159

// Or with destructuring
const { add, subtract } = require("./math");

console.log(add(5, 3));         // 8
```

### Difference: exports vs module.exports

```javascript
// Works - adding properties to exports
exports.add = function(a, b) { return a + b; };
exports.subtract = function(a, b) { return a - b; };

// Won't work - reassigning exports breaks the reference
exports = {  // This doesn't work!
  add: function(a, b) { return a + b; }
};

// Use module.exports for reassignment
module.exports = {  // This works
  add: function(a, b) { return a + b; }
};
```

### Caching

Modules are cached after first load.

```javascript
// counter.js
let count = 0;

module.exports = {
  increment() {
    count++;
  },
  getCount() {
    return count;
  }
};
```

```javascript
// main.js
const counter1 = require("./counter");
const counter2 = require("./counter");

counter1.increment();
console.log(counter1.getCount()); // 1
console.log(counter2.getCount()); // 1 (same instance)

console.log(counter1 === counter2); // true (cached)
```

### Circular Dependencies

CommonJS handles circular dependencies differently than ESM.

```javascript
// a.js
const b = require("./b");

module.exports = {
  name: "Module A",
  getB: () => b
};
```

```javascript
// b.js
const a = require("./a");

module.exports = {
  name: "Module B",
  getA: () => a
};
```

## Module Patterns (Pre-ES6)

Before native modules, various patterns were used.

### IIFE (Immediately Invoked Function Expression)

```javascript
// Create private scope
const MyModule = (function() {
  // Private variables
  let privateVar = "I'm private";

  function privateMethod() {
    console.log("Private method");
  }

  // Public API
  return {
    publicMethod() {
      console.log("Public method");
      privateMethod();
    },
    getPrivateVar() {
      return privateVar;
    }
  };
})();

MyModule.publicMethod(); // Works
console.log(MyModule.getPrivateVar()); // Works
// MyModule.privateMethod(); // Error: not accessible
// console.log(MyModule.privateVar); // undefined
```

### Revealing Module Pattern

```javascript
const MyModule = (function() {
  let privateVar = 0;

  function privateIncrement() {
    privateVar++;
  }

  function publicIncrement() {
    privateIncrement();
  }

  function getCount() {
    return privateVar;
  }

  // Reveal only what you want to be public
  return {
    increment: publicIncrement,
    getCount: getCount
  };
})();

MyModule.increment();
console.log(MyModule.getCount()); // 1
```

### Module with Dependencies

```javascript
const MyModule = (function($, _) {
  // Now has access to jQuery ($) and Lodash (_)

  function doSomething() {
    $(".element").addClass("active");
    const sorted = _.sortBy([3, 1, 2]);
    return sorted;
  }

  return {
    doSomething
  };
})(jQuery, _);
```

## AMD (Asynchronous Module Definition)

Used by RequireJS for browser module loading.

```javascript
// math.js
define(function() {
  return {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
  };
});

// Or with dependencies
define(["jquery", "lodash"], function($, _) {
  return {
    doSomething: function() {
      // Use jQuery and Lodash
    }
  };
});
```

```javascript
// main.js
require(["math"], function(math) {
  console.log(math.add(5, 3)); // 8
});
```

## UMD (Universal Module Definition)

Works in both CommonJS and AMD environments.

```javascript
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["dependency"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS
    module.exports = factory(require("dependency"));
  } else {
    // Browser global
    root.MyModule = factory(root.Dependency);
  }
}(typeof self !== "undefined" ? self : this, function(Dependency) {
  // Module code
  return {
    doSomething: function() {
      // ...
    }
  };
}));
```

## Module Best Practices

### 1. One Module Per File

```javascript
// Good - user.js contains only User class
export default class User {
  // ...
}

// Bad - multiple unrelated things
export class User {}
export class Product {}
export function formatDate() {}
```

### 2. Use Barrel Files (index.js)

```javascript
// components/index.js
export { Button } from "./Button";
export { Input } from "./Input";
export { Form } from "./Form";

// main.js
import { Button, Input, Form } from "./components";
```

### 3. Avoid Circular Dependencies

```javascript
// Bad
// a.js imports b.js
// b.js imports a.js

// Good - refactor to shared module
// both import from shared.js
```

### 4. Keep Modules Focused

```javascript
// Good - single responsibility
// userService.js handles user operations
// authService.js handles authentication
// emailService.js handles emails

// Bad - one huge service file
// services.js with everything
```

### 5. Use Named Exports for Multiple Items

```javascript
// Good
export { add, subtract, multiply, divide };

// Less good for multiple items
export default { add, subtract, multiply, divide };
```

### 6. Consistent Naming

```javascript
// File: userService.js
// Good - matches filename
export class UserService {}

// Confusing - doesn't match
export class UserManager {}
```

### 7. Lazy Loading for Heavy Modules

```javascript
// Load only when needed
button.addEventListener("click", async () => {
  const { ChartLibrary } = await import("./chart-library.js");
  const chart = new ChartLibrary();
  chart.render();
});
```

## Node.js Module Resolution

### How require() Finds Modules

1. **Core modules** - `require("fs")`, `require("path")`
2. **Relative paths** - `require("./math")`, `require("../utils/helper")`
3. **node_modules** - `require("express")`, searches up directory tree
4. **File extensions** - tries `.js`, `.json`, `.node` in order
5. **Directory modules** - looks for `package.json` or `index.js`

```javascript
// Core module
const fs = require("fs");

// Relative path
const math = require("./math"); // Checks ./math.js, ./math.json, ./math/index.js

// node_modules
const express = require("express"); // Searches node_modules/ up the tree

// Specific file
const config = require("./config.json");
```

### package.json

```json
{
  "name": "my-module",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "exports": {
    ".": "./index.js",
    "./utils": "./src/utils.js"
  }
}
```

## ESM vs CommonJS

| Feature | ESM | CommonJS |
|---------|-----|----------|
| **Syntax** | `import`/`export` | `require`/`module.exports` |
| **Loading** | Asynchronous | Synchronous |
| **When evaluated** | Parse time | Runtime |
| **Tree shaking** | Yes | No |
| **Browser support** | Native | Needs bundler |
| **Top-level await** | Yes (ES2022) | No |
| **Dynamic imports** | Yes | Yes (ESM syntax) |
| **Conditional imports** | Dynamic imports | `require()` in if |
| **File extension** | `.mjs` or `.js` with `"type": "module"` | `.cjs` or `.js` |

### Using Both in Node.js

```json
// package.json
{
  "type": "module"  // Use ESM by default
}
```

```javascript
// .js files use ESM
import { add } from "./math.js";

// .cjs files use CommonJS
const math = require("./math.cjs");
```

## Summary

- **ES6 Modules (ESM)** - Modern standard with `import`/`export`
  - Named exports, default exports
  - Static imports and dynamic imports
  - Tree-shakeable
- **CommonJS** - Traditional Node.js with `require`/`module.exports`
  - Synchronous loading
  - Module caching
- **Module Patterns** - IIFE, Revealing Module (pre-module era)
- **Best Practices** - One module per file, avoid circular dependencies, use barrel files
- **Choose ESM** for new projects when possible

Modules are essential for organizing and scaling JavaScript applications!
