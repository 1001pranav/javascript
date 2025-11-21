# Error Handling in JavaScript

Proper error handling is crucial for building robust applications. JavaScript provides several mechanisms to handle errors gracefully.

## Types of Errors

### Built-in Error Types

JavaScript has several built-in error types:

1. **Error** - Generic error
2. **SyntaxError** - Invalid JavaScript syntax
3. **ReferenceError** - Reference to undefined variable
4. **TypeError** - Value is not of expected type
5. **RangeError** - Value not in allowed range
6. **URIError** - Invalid use of URI functions
7. **EvalError** - Error in eval() (rarely used)

```javascript
// SyntaxError
// eval('5 +'); // SyntaxError: Unexpected end of input

// ReferenceError
// console.log(nonExistentVariable); // ReferenceError

// TypeError
const num = 5;
// num.toUpperCase(); // TypeError: num.toUpperCase is not a function

// RangeError
const arr = new Array(-1); // RangeError: Invalid array length
```

## try...catch...finally

The `try...catch` statement handles errors gracefully without stopping execution.

### Basic try...catch

```javascript
try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}

console.log("Program continues");
```

### Accessing Error Properties

```javascript
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.name);    // "Error"
  console.log(error.message); // "Something went wrong"
  console.log(error.stack);   // Stack trace
}
```

### finally Block

`finally` executes regardless of whether an error was thrown.

```javascript
function readFile(filename) {
  let file;

  try {
    file = openFile(filename);
    return processFile(file);
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  } finally {
    // Always executes (even if return in try/catch)
    if (file) {
      closeFile(file);
      console.log("File closed");
    }
  }
}
```

### Multiple catch Blocks (Pattern)

JavaScript doesn't support multiple catch blocks, but you can check error types:

```javascript
try {
  riskyOperation();
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Type error:", error.message);
  } else if (error instanceof ReferenceError) {
    console.error("Reference error:", error.message);
  } else if (error instanceof RangeError) {
    console.error("Range error:", error.message);
  } else {
    console.error("Unknown error:", error);
  }
}
```

## Throwing Errors

### throw Statement

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // Throws error
  console.log("This won't run");
} catch (error) {
  console.error(error.message); // Cannot divide by zero
}
```

### Throwing Different Error Types

```javascript
function validateAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("Age must be a number");
  }
  if (age < 0 || age > 150) {
    throw new RangeError("Age must be between 0 and 150");
  }
  return age;
}

try {
  validateAge("25"); // TypeError
  // validateAge(200); // RangeError
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Type error:", error.message);
  } else if (error instanceof RangeError) {
    console.error("Range error:", error.message);
  }
}
```

### Throwing Non-Error Objects

You can throw any value, but it's best to throw Error objects.

```javascript
// Can throw primitives (not recommended)
throw "This is an error";
throw 42;
throw true;

// Better: throw Error objects
throw new Error("This is an error");

// Best: use custom error classes
throw new ValidationError("Invalid input");
```

## Custom Error Classes

Create custom error types for specific error conditions.

### Basic Custom Error

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("Something custom went wrong");
} catch (error) {
  console.log(error.name);    // CustomError
  console.log(error.message); // Something custom went wrong
  console.log(error instanceof CustomError); // true
  console.log(error instanceof Error);       // true
}
```

### Advanced Custom Errors

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class AuthenticationError extends Error {
  constructor(message, statusCode = 401) {
    super(message);
    this.name = "AuthenticationError";
    this.statusCode = statusCode;
  }
}

class DatabaseError extends Error {
  constructor(message, query) {
    super(message);
    this.name = "DatabaseError";
    this.query = query;
    this.timestamp = new Date();
  }
}

// Usage
function validateUser(user) {
  if (!user.email) {
    throw new ValidationError("Email is required", "email");
  }
  if (!user.password) {
    throw new ValidationError("Password is required", "password");
  }
}

try {
  validateUser({ email: "" });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation failed for field: ${error.field}`);
    console.error(`Message: ${error.message}`);
  }
}
```

## Error Handling with Async/Await

### try...catch with async/await

```javascript
async function fetchUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error; // Re-throw or handle
  }
}

// Usage
(async () => {
  try {
    const user = await fetchUser(1);
    console.log(user);
  } catch (error) {
    console.error("Error in main:", error);
  }
})();
```

### Handling Multiple Async Operations

```javascript
async function loadAllData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);

    return { users, posts, comments };
  } catch (error) {
    console.error("One or more requests failed:", error);
    throw error;
  }
}
```

### Promise.allSettled for Graceful Degradation

```javascript
async function loadDataGracefully() {
  const results = await Promise.allSettled([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]);

  const data = {};

  results.forEach((result, index) => {
    const keys = ["users", "posts", "comments"];

    if (result.status === "fulfilled") {
      data[keys[index]] = result.value;
    } else {
      console.error(`Failed to load ${keys[index]}:`, result.reason);
      data[keys[index]] = []; // Default value
    }
  });

  return data;
}
```

## Error Handling Patterns

### Error-First Callbacks (Node.js Convention)

```javascript
function readFileCallback(filename, callback) {
  fs.readFile(filename, (error, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, data);
  });
}

// Usage
readFileCallback("file.txt", (error, data) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("Data:", data);
});
```

### Result Object Pattern

```javascript
function divide(a, b) {
  if (b === 0) {
    return { success: false, error: "Cannot divide by zero" };
  }
  return { success: true, value: a / b };
}

const result1 = divide(10, 2);
if (result1.success) {
  console.log("Result:", result1.value);
} else {
  console.error("Error:", result1.error);
}

const result2 = divide(10, 0);
if (!result2.success) {
  console.error("Error:", result2.error);
}
```

### Either/Maybe Pattern (Functional)

```javascript
class Result {
  constructor(value, error) {
    this.value = value;
    this.error = error;
  }

  static ok(value) {
    return new Result(value, null);
  }

  static err(error) {
    return new Result(null, error);
  }

  isOk() {
    return this.error === null;
  }

  isErr() {
    return this.error !== null;
  }

  map(fn) {
    if (this.isErr()) return this;
    try {
      return Result.ok(fn(this.value));
    } catch (error) {
      return Result.err(error);
    }
  }

  flatMap(fn) {
    if (this.isErr()) return this;
    try {
      return fn(this.value);
    } catch (error) {
      return Result.err(error);
    }
  }
}

// Usage
function divide(a, b) {
  if (b === 0) {
    return Result.err(new Error("Division by zero"));
  }
  return Result.ok(a / b);
}

const result = divide(10, 2)
  .map(x => x * 2)
  .map(x => x + 5);

if (result.isOk()) {
  console.log("Result:", result.value); // 15
} else {
  console.error("Error:", result.error);
}
```

## Global Error Handling

### window.onerror (Browser)

```javascript
window.onerror = function(message, source, lineno, colno, error) {
  console.error("Global error caught:");
  console.error("Message:", message);
  console.error("Source:", source);
  console.error("Line:", lineno);
  console.error("Column:", colno);
  console.error("Error object:", error);

  // Send to error tracking service
  // trackError(error);

  return true; // Prevents default error handling
};

// Trigger an error
// throw new Error("Test error");
```

### window.addEventListener('error') (Browser)

```javascript
window.addEventListener('error', (event) => {
  console.error("Error caught:", event.error);

  // Send to logging service
  // logError(event.error);
});
```

### Unhandled Promise Rejections (Browser)

```javascript
window.addEventListener('unhandledrejection', (event) => {
  console.error("Unhandled promise rejection:");
  console.error("Promise:", event.promise);
  console.error("Reason:", event.reason);

  // Prevent default error handling
  event.preventDefault();
});

// Trigger unhandled rejection
// Promise.reject("Test rejection");
```

### process.on('uncaughtException') (Node.js)

```javascript
process.on('uncaughtException', (error) => {
  console.error("Uncaught exception:", error);

  // Clean up resources
  // ...

  // Exit process (recommended)
  process.exit(1);
});

// Trigger uncaught exception
// throw new Error("Test error");
```

### process.on('unhandledRejection') (Node.js)

```javascript
process.on('unhandledRejection', (reason, promise) => {
  console.error("Unhandled promise rejection:");
  console.error("Promise:", promise);
  console.error("Reason:", reason);

  // Exit or handle
  // process.exit(1);
});

// Trigger unhandled rejection
// Promise.reject("Test rejection");
```

## Defensive Programming

### Input Validation

```javascript
function calculateDiscount(price, discountPercent) {
  // Validate inputs
  if (typeof price !== "number" || price < 0) {
    throw new TypeError("Price must be a positive number");
  }

  if (typeof discountPercent !== "number" || discountPercent < 0 || discountPercent > 100) {
    throw new RangeError("Discount must be between 0 and 100");
  }

  return price * (1 - discountPercent / 100);
}
```

### Guard Clauses

```javascript
function processUser(user) {
  // Guard clauses - exit early
  if (!user) {
    throw new Error("User is required");
  }

  if (!user.id) {
    throw new ValidationError("User ID is required", "id");
  }

  if (!user.email) {
    throw new ValidationError("Email is required", "email");
  }

  // Main logic here
  console.log("Processing user:", user.email);
}
```

### Null/Undefined Checks

```javascript
function getUserName(user) {
  // Defensive approach
  return user?.profile?.name ?? "Anonymous";

  // Equivalent to:
  // if (user && user.profile && user.profile.name) {
  //   return user.profile.name;
  // }
  // return "Anonymous";
}
```

## Best Practices

### 1. Always Handle Errors

```javascript
// Bad - errors not handled
async function bad() {
  const data = await fetchData();
  return data;
}

// Good - errors handled
async function good() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return default value
  }
}
```

### 2. Provide Meaningful Error Messages

```javascript
// Bad
throw new Error("Error");

// Good
throw new Error(`Failed to load user with ID ${userId}: User not found`);
```

### 3. Use Custom Error Classes

```javascript
// Provides better error handling and debugging
class NotFoundError extends Error {
  constructor(resource, id) {
    super(`${resource} with ID ${id} not found`);
    this.name = "NotFoundError";
    this.resource = resource;
    this.id = id;
  }
}

throw new NotFoundError("User", 123);
```

### 4. Don't Swallow Errors

```javascript
// Bad - error is hidden
try {
  riskyOperation();
} catch (error) {
  // Nothing - error is lost!
}

// Good - at minimum, log it
try {
  riskyOperation();
} catch (error) {
  console.error("Error in riskyOperation:", error);
  // Or re-throw, or handle appropriately
}
```

### 5. Clean Up Resources in finally

```javascript
let resource;
try {
  resource = acquireResource();
  useResource(resource);
} catch (error) {
  handleError(error);
} finally {
  if (resource) {
    releaseResource(resource);
  }
}
```

### 6. Fail Fast

```javascript
function processOrder(order) {
  // Validate immediately
  if (!order) throw new Error("Order is required");
  if (!order.items || order.items.length === 0) {
    throw new Error("Order must have items");
  }
  if (!order.customerId) {
    throw new Error("Customer ID is required");
  }

  // Process order...
}
```

### 7. Use Error Boundaries (React)

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

## Debugging Errors

### Using console Methods

```javascript
try {
  problematicCode();
} catch (error) {
  console.error("Error:", error);        // Log error
  console.trace();                       // Show stack trace
  console.table(error);                  // Display as table
  console.dir(error, { depth: null });   // Deep inspection
}
```

### Error Stack Traces

```javascript
function a() {
  b();
}

function b() {
  c();
}

function c() {
  throw new Error("Error in c");
}

try {
  a();
} catch (error) {
  console.log(error.stack);
  // Shows call stack: c -> b -> a
}
```

## Summary

- **try...catch...finally** for synchronous error handling
- **throw** to create errors explicitly
- **Custom error classes** for specific error types
- **async/await with try...catch** for async errors
- **Promise.allSettled()** for graceful degradation
- **Global handlers** for uncaught errors
- **Defensive programming** with validation and guard clauses
- **Best practices**: meaningful messages, don't swallow errors, clean up resources

Proper error handling makes your code more robust, maintainable, and user-friendly!
