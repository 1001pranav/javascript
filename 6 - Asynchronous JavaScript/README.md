# Asynchronous JavaScript

Asynchronous programming is fundamental to JavaScript. It allows you to perform long-running operations without blocking the main thread, enabling responsive applications.

## Why Asynchronous Programming?

JavaScript is **single-threaded**, meaning it can only execute one piece of code at a time. Without asynchronous programming, long operations (like network requests or file I/O) would freeze the entire application.

```javascript
// Synchronous (blocking)
console.log("Start");
// Imagine this takes 3 seconds
// Everything else must wait!
console.log("End"); // Has to wait

// Asynchronous (non-blocking)
console.log("Start");
setTimeout(() => {
  console.log("After 3 seconds");
}, 3000);
console.log("End"); // Executes immediately

// Output:
// Start
// End
// After 3 seconds
```

## Callbacks

The original way to handle asynchronous operations was through callback functions.

### Basic Callback

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Alice", age: 30 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log("Data received:", data);
});

console.log("Request sent");

// Output:
// Request sent
// Data received: { name: 'Alice', age: 30 }
```

### Error Handling with Callbacks

Convention: first parameter is error, second is data.

```javascript
function fetchUser(id, callback) {
  setTimeout(() => {
    if (id < 1) {
      callback(new Error("Invalid ID"), null);
    } else {
      callback(null, { id, name: "Alice" });
    }
  }, 1000);
}

fetchUser(1, (error, user) => {
  if (error) {
    console.error("Error:", error.message);
    return;
  }
  console.log("User:", user);
});
```

### Callback Hell (Pyramid of Doom)

Multiple nested callbacks become hard to read and maintain.

```javascript
// Callback hell example
fetchUser(1, (error, user) => {
  if (error) {
    console.error(error);
    return;
  }

  fetchUserPosts(user.id, (error, posts) => {
    if (error) {
      console.error(error);
      return;
    }

    fetchPostComments(posts[0].id, (error, comments) => {
      if (error) {
        console.error(error);
        return;
      }

      console.log(comments);
    });
  });
});
```

## Promises

Promises provide a cleaner way to handle asynchronous operations. A Promise represents a value that may be available now, later, or never.

### Promise States

A Promise has three states:
1. **Pending** - Initial state, neither fulfilled nor rejected
2. **Fulfilled** - Operation completed successfully
3. **Rejected** - Operation failed

### Creating Promises

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Operation successful!"); // Fulfill the promise
    } else {
      reject(new Error("Operation failed!")); // Reject the promise
    }
  }, 1000);
});

// Using the promise
promise
  .then((result) => {
    console.log(result); // Operation successful!
  })
  .catch((error) => {
    console.error(error);
  });
```

### Promise Methods

#### .then()

Handles fulfilled promises.

```javascript
const promise = Promise.resolve("Success!");

promise.then((value) => {
  console.log(value); // Success!
});

// Chaining
promise
  .then((value) => {
    console.log(value);
    return "Next value";
  })
  .then((value) => {
    console.log(value); // Next value
  });
```

#### .catch()

Handles rejected promises.

```javascript
const promise = Promise.reject(new Error("Failed!"));

promise.catch((error) => {
  console.error(error.message); // Failed!
});

// Catches any error in the chain
Promise.resolve("Start")
  .then(() => {
    throw new Error("Something went wrong");
  })
  .then(() => {
    console.log("This won't run");
  })
  .catch((error) => {
    console.error(error.message); // Something went wrong
  });
```

#### .finally()

Executes regardless of promise outcome.

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => {
    console.log("Cleanup: request completed");
  });
```

### Promise Chaining

Promises can be chained to perform sequential asynchronous operations.

```javascript
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Alice" });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "Post 1" }]);
    }, 1000);
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, text: "Great post!" }]);
    }, 1000);
  });
}

// Clean promise chain (vs callback hell)
fetchUser(1)
  .then((user) => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return fetchComments(posts[0].id);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### Static Promise Methods

#### Promise.resolve()

Creates a fulfilled promise.

```javascript
const promise = Promise.resolve(42);
promise.then((value) => console.log(value)); // 42

// Equivalent to:
const promise2 = new Promise((resolve) => resolve(42));
```

#### Promise.reject()

Creates a rejected promise.

```javascript
const promise = Promise.reject(new Error("Failed"));
promise.catch((error) => console.error(error.message)); // Failed
```

#### Promise.all()

Waits for **all** promises to fulfill (or any to reject).

```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [1, 2, 3]
  })
  .catch((error) => {
    console.error(error);
  });

// If any promise rejects, Promise.all rejects
const failing = Promise.reject("Error");
Promise.all([promise1, failing, promise2])
  .catch((error) => {
    console.error(error); // Error (fails fast)
  });
```

**Use case:** Fetching multiple independent resources.

```javascript
Promise.all([
  fetch("/api/users"),
  fetch("/api/posts"),
  fetch("/api/comments")
])
  .then(([users, posts, comments]) => {
    console.log("All data loaded");
  })
  .catch((error) => {
    console.error("One request failed:", error);
  });
```

#### Promise.allSettled()

Waits for all promises to settle (fulfill or reject), never rejects.

```javascript
const promises = [
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3)
];

Promise.allSettled(promises).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Success:", result.value);
    } else {
      console.log("Failed:", result.reason);
    }
  });
});

// Output:
// Success: 1
// Failed: Error
// Success: 3
```

#### Promise.race()

Returns the result of the first promise to settle.

```javascript
const slow = new Promise((resolve) => setTimeout(() => resolve("Slow"), 3000));
const fast = new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000));

Promise.race([slow, fast]).then((result) => {
  console.log(result); // Fast (resolves first)
});
```

**Use case:** Timeout implementation.

```javascript
function fetchWithTimeout(url, timeout = 5000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    )
  ]);
}

fetchWithTimeout("https://api.example.com/data")
  .then((response) => console.log("Success"))
  .catch((error) => console.error(error.message)); // Timeout after 5s
```

#### Promise.any()

Returns the first **fulfilled** promise, ignores rejections unless all reject.

```javascript
const promises = [
  Promise.reject("Error 1"),
  Promise.resolve("Success!"),
  Promise.reject("Error 2")
];

Promise.any(promises).then((result) => {
  console.log(result); // Success!
});

// If all reject
Promise.any([Promise.reject("E1"), Promise.reject("E2")])
  .catch((error) => {
    console.log(error); // AggregateError
  });
```

## Async/Await

Async/await (ES2017) provides a more synchronous-looking way to work with promises.

### Basic async/await

```javascript
// Function that returns a promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

// Using async/await
async function loadData() {
  console.log("Loading...");
  const data = await fetchData(); // Waits for promise to resolve
  console.log(data);
  console.log("Done!");
}

loadData();
// Output:
// Loading...
// (1 second pause)
// Data loaded
// Done!
```

### Async Functions Always Return Promises

```javascript
async function getValue() {
  return 42; // Automatically wrapped in Promise.resolve()
}

getValue().then((value) => {
  console.log(value); // 42
});

// Equivalent to:
function getValue2() {
  return Promise.resolve(42);
}
```

### Error Handling with try/catch

```javascript
async function fetchUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error:", error.message);
    throw error; // Re-throw if needed
  }
}

// Using it
fetchUser(1)
  .then((user) => console.log(user))
  .catch((error) => console.error("Failed:", error));
```

### Sequential vs Parallel Execution

#### Sequential (one after another)

```javascript
async function sequential() {
  console.time("sequential");

  const user = await fetchUser(1);     // Wait 1 second
  const posts = await fetchPosts(1);   // Wait 1 second
  const comments = await fetchComments(1); // Wait 1 second

  console.timeEnd("sequential"); // ~3 seconds
  return { user, posts, comments };
}
```

#### Parallel (simultaneously)

```javascript
async function parallel() {
  console.time("parallel");

  // Start all requests at once
  const [user, posts, comments] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
    fetchComments(1)
  ]);

  console.timeEnd("parallel"); // ~1 second
  return { user, posts, comments };
}
```

#### Mixed (dependent operations)

```javascript
async function mixed() {
  // First, fetch user (must happen first)
  const user = await fetchUser(1);

  // Then fetch posts and comments in parallel
  const [posts, comments] = await Promise.all([
    fetchPosts(user.id),
    fetchComments(user.id)
  ]);

  return { user, posts, comments };
}
```

### Awaiting Multiple Promises

```javascript
async function loadAllData() {
  try {
    // Wait for all to complete
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);

    console.log("All data loaded");
    return { users, posts, comments };
  } catch (error) {
    console.error("One request failed:", error);
  }
}
```

### Top-Level await (ES2022)

In modules, you can use await at the top level.

```javascript
// In a module file
const response = await fetch("/api/config");
const config = await response.json();

export default config;
```

## Real-World Examples

### Fetching API Data

```javascript
async function getUser(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
}

// Usage
(async () => {
  try {
    const user = await getUser(1);
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
  }
})();
```

### Retry Logic

```javascript
async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      console.log(`Attempt ${i + 1} failed`);
      if (i === maxRetries - 1) throw error;

      // Wait before retry (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

### Timeout Wrapper

```javascript
function timeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms)
    )
  ]);
}

// Usage
async function fetchWithTimeout() {
  try {
    const data = await timeout(fetch("/api/data"), 5000);
    console.log("Data:", data);
  } catch (error) {
    console.error("Request timed out or failed:", error);
  }
}
```

### Processing Array Items Sequentially

```javascript
async function processItems(items) {
  for (const item of items) {
    await processItem(item); // Wait for each to complete
    console.log(`Processed: ${item}`);
  }
}

// Or with reduce
async function processItemsReduce(items) {
  return items.reduce(async (previousPromise, item) => {
    await previousPromise;
    return await processItem(item);
  }, Promise.resolve());
}
```

### Processing Array Items in Parallel

```javascript
async function processItems(items) {
  const promises = items.map(item => processItem(item));
  const results = await Promise.all(promises);
  return results;
}

// Or more concisely
async function processItems(items) {
  return await Promise.all(items.map(processItem));
}
```

### Limiting Concurrent Operations

```javascript
async function processWithLimit(items, limit = 3) {
  const results = [];

  for (let i = 0; i < items.length; i += limit) {
    const batch = items.slice(i, i + limit);
    const batchResults = await Promise.all(
      batch.map(item => processItem(item))
    );
    results.push(...batchResults);
  }

  return results;
}
```

## Common Mistakes and Best Practices

### ❌ Forgetting to await

```javascript
// Wrong - promise not awaited
async function getData() {
  const data = fetchData(); // Missing await!
  console.log(data); // Promise object, not data
}

// Correct
async function getData() {
  const data = await fetchData();
  console.log(data); // Actual data
}
```

### ❌ Not handling errors

```javascript
// Risky - errors not handled
async function riskyFunction() {
  const data = await fetchData(); // What if this fails?
  return data;
}

// Better - errors handled
async function safeFunction() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null; // Or throw, or return default value
  }
}
```

### ❌ Sequential when could be parallel

```javascript
// Slow - sequential
async function slow() {
  const user = await fetchUser();      // 1s
  const posts = await fetchPosts();    // 1s
  const comments = await fetchComments(); // 1s
  // Total: 3 seconds
}

// Fast - parallel
async function fast() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  // Total: 1 second
}
```

### ✅ Best Practices

1. **Always handle promise rejections**
2. **Use Promise.all() for independent operations**
3. **Use try/catch with async/await**
4. **Return promises from async functions explicitly when needed**
5. **Use async/await over .then() for readability**
6. **Be careful with loops** - await in loops is sequential

```javascript
// Good practices example
async function fetchUserData(userId) {
  try {
    // Parallel fetch of independent data
    const [user, settings] = await Promise.all([
      fetch(`/api/users/${userId}`).then(r => r.json()),
      fetch(`/api/settings/${userId}`).then(r => r.json())
    ]);

    // Sequential fetch of dependent data
    const posts = await fetch(`/api/posts?userId=${user.id}`)
      .then(r => r.json());

    return { user, settings, posts };
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    throw new Error("User data unavailable");
  }
}
```

## Summary

- **Callbacks** - Original async pattern, prone to callback hell
- **Promises** - Cleaner async handling with chaining
  - `.then()`, `.catch()`, `.finally()`
  - `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, `Promise.any()`
- **Async/Await** - Syntactic sugar over promises, looks synchronous
  - `async` functions always return promises
  - `await` pauses execution until promise resolves
  - Use `try/catch` for error handling
- **Parallel vs Sequential** - Choose based on dependencies
- **Error handling** - Always handle promise rejections

Mastering asynchronous JavaScript is essential for building modern web applications!
