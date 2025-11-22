# WeakMap in JavaScript

A WeakMap is similar to a Map, but with special garbage collection properties and restrictions.

## WeakMap vs Map

| Feature | Map | WeakMap |
|---------|-----|---------|
| **Keys** | Any type | Objects only |
| **Garbage Collection** | Prevents GC | Allows GC |
| **Iterable** | Yes | No |
| **size property** | Yes | No |
| **forEach()** | Yes | No |
| **keys()/values()/entries()** | Yes | No |
| **clear()** | Yes | No |

## Creating a WeakMap

```javascript
const weakMap = new WeakMap();

// Can only use objects as keys
const key1 = { id: 1 };
const key2 = { id: 2 };

weakMap.set(key1, "value1");
weakMap.set(key2, "value2");

// Cannot use primitives as keys
// weakMap.set("string", "value"); // TypeError
// weakMap.set(123, "value"); // TypeError
```

## WeakMap Methods

### set()

Adds or updates a key-value pair.

```javascript
const weakMap = new WeakMap();

const user = { name: "Alice" };
const metadata = { lastSeen: new Date(), loginCount: 5 };

weakMap.set(user, metadata);

// Chaining works
weakMap
  .set({ id: 1 }, "value1")
  .set({ id: 2 }, "value2");
```

### get()

Retrieves the value for a key.

```javascript
const weakMap = new WeakMap();
const user = { name: "Alice" };

weakMap.set(user, { role: "admin" });

console.log(weakMap.get(user)); // { role: 'admin' }
console.log(weakMap.get({}));   // undefined (different object)
```

### has()

Checks if a key exists.

```javascript
const weakMap = new WeakMap();
const key1 = { id: 1 };
const key2 = { id: 2 };

weakMap.set(key1, "value");

console.log(weakMap.has(key1)); // true
console.log(weakMap.has(key2)); // false
```

### delete()

Removes a key-value pair.

```javascript
const weakMap = new WeakMap();
const key = { id: 1 };

weakMap.set(key, "value");
console.log(weakMap.has(key)); // true

weakMap.delete(key);
console.log(weakMap.has(key)); // false
```

## Garbage Collection

When an object used as a key is no longer referenced anywhere else, it can be garbage collected along with its value in the WeakMap.

```javascript
let user = { name: "Alice" };
const weakMap = new WeakMap();

weakMap.set(user, { data: "some data" });

console.log(weakMap.has(user)); // true

// Remove the only reference to user
user = null;

// Now the user object can be garbage collected
// The entry in weakMap will automatically be removed
// (This happens eventually, not immediately)
```

### Comparison with Regular Map

```javascript
// Regular Map prevents garbage collection
let obj1 = { id: 1 };
const map = new Map();
map.set(obj1, "value");

obj1 = null; // Object is still in memory (Map holds reference)
console.log(map.size); // 1 (still exists)

// WeakMap allows garbage collection
let obj2 = { id: 2 };
const weakMap = new WeakMap();
weakMap.set(obj2, "value");

obj2 = null; // Object can be garbage collected
// WeakMap entry will be automatically removed (eventually)
```

## Use Cases

### 1. Storing Metadata About Objects

Store additional information about objects without modifying them.

```javascript
const metadata = new WeakMap();

class User {
  constructor(name) {
    this.name = name;
  }
}

function setMetadata(user, data) {
  metadata.set(user, data);
}

function getMetadata(user) {
  return metadata.get(user);
}

const alice = new User("Alice");
setMetadata(alice, {
  lastLogin: new Date(),
  loginCount: 5,
  preferences: { theme: "dark" }
});

console.log(getMetadata(alice));
// { lastLogin: ..., loginCount: 5, preferences: { theme: 'dark' } }
```

### 2. Private Data for Objects

Use WeakMap to store private data without adding it to the object itself.

```javascript
const privateData = new WeakMap();

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    // Store private data in WeakMap
    privateData.set(this, { balance });
  }

  deposit(amount) {
    const data = privateData.get(this);
    data.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${data.balance}`);
  }

  withdraw(amount) {
    const data = privateData.get(this);
    if (amount <= data.balance) {
      data.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${data.balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return privateData.get(this).balance;
  }
}

const account = new Account("Alice", 1000);
account.deposit(500);    // Deposited 500. New balance: 1500
account.withdraw(200);   // Withdrew 200. New balance: 1300
console.log(account.getBalance()); // 1300

// Cannot access balance directly
console.log(account.balance); // undefined
```

### 3. Caching/Memoization

Cache computed values associated with objects.

```javascript
const cache = new WeakMap();

function expensiveOperation(obj) {
  // Check if result is cached
  if (cache.has(obj)) {
    console.log("Returning cached result");
    return cache.get(obj);
  }

  console.log("Computing result");
  const result = {
    // Expensive computation
    value: obj.data * 1000,
    computed: new Date()
  };

  cache.set(obj, result);
  return result;
}

const obj = { data: 42 };

console.log(expensiveOperation(obj)); // Computing result
console.log(expensiveOperation(obj)); // Returning cached result

// When obj is garbage collected, cache entry is removed too
```

### 4. DOM Node Metadata

Store metadata about DOM elements without polluting the DOM.

```javascript
const elementMetadata = new WeakMap();

function setupElement(element, options) {
  element.addEventListener("click", handleClick);

  // Store metadata
  elementMetadata.set(element, {
    clickCount: 0,
    options: options,
    createdAt: new Date()
  });
}

function handleClick(event) {
  const metadata = elementMetadata.get(event.target);
  if (metadata) {
    metadata.clickCount++;
    console.log(`Clicked ${metadata.clickCount} times`);
  }
}

function getElementInfo(element) {
  return elementMetadata.get(element);
}

// Usage
const button = document.createElement("button");
setupElement(button, { color: "blue" });

// When button is removed from DOM and all references are gone,
// the metadata is automatically garbage collected
```

### 5. Event Listeners Management

Track event listeners for cleanup.

```javascript
const eventListeners = new WeakMap();

function addListener(element, event, handler) {
  if (!eventListeners.has(element)) {
    eventListeners.set(element, []);
  }

  const listeners = eventListeners.get(element);
  listeners.push({ event, handler });

  element.addEventListener(event, handler);
}

function removeAllListeners(element) {
  const listeners = eventListeners.get(element);

  if (listeners) {
    listeners.forEach(({ event, handler }) => {
      element.removeEventListener(event, handler);
    });

    eventListeners.delete(element);
  }
}

// Usage
const button = document.createElement("button");

addListener(button, "click", () => console.log("Clicked!"));
addListener(button, "mouseover", () => console.log("Hover!"));

// Clean up all listeners
removeAllListeners(button);
```

### 6. Object Observation/Tracking

Track which objects have been processed or observed.

```javascript
const observedObjects = new WeakMap();

function observe(obj, callback) {
  if (observedObjects.has(obj)) {
    console.log("Already observing this object");
    return;
  }

  // Set up observation
  observedObjects.set(obj, {
    callback,
    startTime: new Date()
  });

  // Trigger callback on changes (simplified)
  const handler = {
    set(target, property, value) {
      target[property] = value;
      callback(target, property, value);
      return true;
    }
  };

  return new Proxy(obj, handler);
}

// Usage
const user = { name: "Alice" };

const observed = observe(user, (obj, prop, value) => {
  console.log(`Property ${prop} changed to ${value}`);
});

observed.name = "Bob"; // Property name changed to Bob
```

### 7. Instance Counting

Track instances without preventing garbage collection.

```javascript
const instances = new WeakMap();
let instanceCounter = 0;

class MyClass {
  constructor() {
    instanceCounter++;
    instances.set(this, instanceCounter);
  }

  getInstanceNumber() {
    return instances.get(this);
  }
}

const obj1 = new MyClass();
const obj2 = new MyClass();
const obj3 = new MyClass();

console.log(obj1.getInstanceNumber()); // 1
console.log(obj2.getInstanceNumber()); // 2
console.log(obj3.getInstanceNumber()); // 3

// When objects are garbage collected, WeakMap entries disappear too
```

## Real-World Example: React Component Metadata

```javascript
const componentMetadata = new WeakMap();

class ComponentManager {
  register(component, props) {
    componentMetadata.set(component, {
      renderCount: 0,
      lastPropsUpdate: new Date(),
      previousProps: null,
      initialProps: { ...props }
    });
  }

  updateRenderCount(component) {
    const metadata = componentMetadata.get(component);
    if (metadata) {
      metadata.renderCount++;
    }
  }

  updateProps(component, newProps) {
    const metadata = componentMetadata.get(component);
    if (metadata) {
      metadata.previousProps = { ...newProps };
      metadata.lastPropsUpdate = new Date();
    }
  }

  getMetadata(component) {
    return componentMetadata.get(component);
  }
}

// When component is unmounted and garbage collected,
// metadata is automatically removed
```

## Limitations

### Cannot Iterate

```javascript
const weakMap = new WeakMap();

weakMap.set({ id: 1 }, "value1");
weakMap.set({ id: 2 }, "value2");

// These don't exist:
// weakMap.forEach() // ❌
// for (let item of weakMap) {} // ❌
// weakMap.size // ❌
// weakMap.clear() // ❌
```

### Only Objects as Keys

```javascript
const weakMap = new WeakMap();

// ✅ Works
weakMap.set({}, "object");
weakMap.set([], "array");
weakMap.set(() => {}, "function");

// ❌ Doesn't work (TypeError)
// weakMap.set(1, "number");
// weakMap.set("string", "string");
// weakMap.set(Symbol(), "symbol");
// weakMap.set(null, "null");
```

### Symbols as Keys (ES2023)

Since ES2023, registered symbols can be used as WeakMap keys.

```javascript
const weakMap = new WeakMap();

// Registered symbols (created with Symbol.for())
const key = Symbol.for("myKey");
weakMap.set(key, "value"); // Works in ES2023+

// Regular symbols still don't work
const regularSymbol = Symbol("regular");
// weakMap.set(regularSymbol, "value"); // Still throws TypeError
```

## When to Use WeakMap

**Use WeakMap when:**
- ✅ Storing metadata about objects
- ✅ Creating private object data
- ✅ Caching results associated with objects
- ✅ Preventing memory leaks with DOM elements
- ✅ You don't need to iterate over entries
- ✅ Keys should be garbage collectable

**Use Map when:**
- ✅ You need to iterate over entries
- ✅ You need the `size` property
- ✅ You want to use primitive keys
- ✅ You need `clear()` method
- ✅ Keys should persist regardless of other references

## Performance Considerations

- **WeakMap get/set/has/delete** are O(1) operations
- **No memory overhead** for tracking iteration
- **Better for memory** when keys may be garbage collected
- **Cannot measure size** - can't check how many entries exist

## Best Practices

1. **Use for object metadata** that shouldn't prevent GC
2. **Use for private data** in classes (before `#private` fields)
3. **Use for caching** when cache entries should be automatically cleaned up
4. **Don't use** when you need iteration or size
5. **Remember** keys must be objects (except registered symbols in ES2023+)

```javascript
// Good: Private data with WeakMap
const privateData = new WeakMap();

class MyClass {
  constructor() {
    privateData.set(this, { secret: "value" });
  }

  getSecret() {
    return privateData.get(this).secret;
  }
}

// Also Good: Using # private fields (ES2022+)
class MyClass2 {
  #secret = "value";

  getSecret() {
    return this.#secret;
  }
}
```

## Summary

- **WeakMap** - Key-value pairs where keys are objects
  - Methods: `set()`, `get()`, `has()`, `delete()`
  - **Not iterable** - no forEach, for...of, size, clear
  - **Weak references** - allows garbage collection
  - **Use for**: metadata, private data, caching, DOM elements
- **Prevents memory leaks** - entries automatically cleaned up
- **Cannot iterate** - trade-off for automatic cleanup
- **ES2023+** - Registered symbols can be keys

WeakMap is perfect for scenarios where you need to associate data with objects without preventing those objects from being garbage collected!
