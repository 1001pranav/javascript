# Sets and WeakSets in JavaScript

Sets are collections of unique values. WeakSets are similar but with special garbage collection properties.

## Set

A Set is a collection of unique values. Any value (primitives or object references) can be stored.

### Creating a Set

```javascript
// Empty set
const set = new Set();

// Set from array
const numbers = new Set([1, 2, 3, 4, 5]);

// Set removes duplicates
const withDuplicates = new Set([1, 2, 2, 3, 3, 3, 4]);
console.log(withDuplicates); // Set(4) { 1, 2, 3, 4 }

// Set from string (each character is unique)
const letters = new Set("hello");
console.log(letters); // Set(4) { 'h', 'e', 'l', 'o' }
```

### Set Methods

#### add()

Adds a value to the set.

```javascript
const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate, won't be added

console.log(set); // Set(3) { 1, 2, 3 }

// Chaining
set.add(4).add(5).add(6);
```

#### has()

Checks if a value exists in the set.

```javascript
const set = new Set([1, 2, 3]);

console.log(set.has(2));  // true
console.log(set.has(5));  // false
```

#### delete()

Removes a value from the set.

```javascript
const set = new Set([1, 2, 3, 4, 5]);

set.delete(3);
console.log(set); // Set(4) { 1, 2, 4, 5 }

console.log(set.delete(10)); // false (doesn't exist)
console.log(set.delete(4));  // true (exists and deleted)
```

#### clear()

Removes all values from the set.

```javascript
const set = new Set([1, 2, 3, 4, 5]);

set.clear();
console.log(set); // Set(0) {}
console.log(set.size); // 0
```

#### size

Returns the number of values in the set.

```javascript
const set = new Set([1, 2, 3, 4, 5]);

console.log(set.size); // 5

set.add(6);
console.log(set.size); // 6

set.delete(1);
console.log(set.size); // 5
```

### Iterating Over Sets

#### forEach()

```javascript
const set = new Set(["apple", "banana", "orange"]);

set.forEach((value, valueAgain, set) => {
  console.log(value); // Note: value === valueAgain in Sets
});

// Output:
// apple
// banana
// orange
```

#### for...of

```javascript
const set = new Set([1, 2, 3, 4, 5]);

for (const value of set) {
  console.log(value);
}

// Output: 1 2 3 4 5
```

#### values()

```javascript
const set = new Set(["a", "b", "c"]);

const iterator = set.values();

console.log(iterator.next().value); // "a"
console.log(iterator.next().value); // "b"
console.log(iterator.next().value); // "c"
```

#### keys()

In Sets, `keys()` is the same as `values()`.

```javascript
const set = new Set([1, 2, 3]);

console.log([...set.keys()]);   // [1, 2, 3]
console.log([...set.values()]); // [1, 2, 3]
```

#### entries()

Returns `[value, value]` pairs (for compatibility with Map).

```javascript
const set = new Set(["apple", "banana"]);

for (const [key, value] of set.entries()) {
  console.log(key, value); // key === value in Sets
}

// Output:
// apple apple
// banana banana
```

### Converting Sets

#### Set to Array

```javascript
const set = new Set([1, 2, 3, 4, 5]);

// Method 1: Spread operator
const arr1 = [...set];

// Method 2: Array.from()
const arr2 = Array.from(set);

console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]
```

#### Array to Set (Remove Duplicates)

```javascript
const arrayWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 4, 5];

const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // [1, 2, 3, 4, 5]
```

### Set Operations

#### Union

```javascript
function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

console.log(union(set1, set2)); // Set(5) { 1, 2, 3, 4, 5 }
```

#### Intersection

```javascript
function intersection(setA, setB) {
  return new Set([...setA].filter(x => setB.has(x)));
}

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

console.log(intersection(set1, set2)); // Set(2) { 3, 4 }
```

#### Difference

```javascript
function difference(setA, setB) {
  return new Set([...setA].filter(x => !setB.has(x)));
}

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

console.log(difference(set1, set2)); // Set(2) { 1, 2 }
```

#### Symmetric Difference

```javascript
function symmetricDifference(setA, setB) {
  const diff1 = difference(setA, setB);
  const diff2 = difference(setB, setA);
  return union(diff1, diff2);
}

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

console.log(symmetricDifference(set1, set2)); // Set(4) { 1, 2, 5, 6 }
```

#### Subset

```javascript
function isSubset(setA, setB) {
  return [...setA].every(x => setB.has(x));
}

const set1 = new Set([1, 2]);
const set2 = new Set([1, 2, 3, 4]);

console.log(isSubset(set1, set2)); // true
console.log(isSubset(set2, set1)); // false
```

### Practical Use Cases

#### Removing Duplicates from Array

```javascript
const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4, 5]
```

#### Checking for Unique Values

```javascript
function hasUniqueValues(arr) {
  return arr.length === new Set(arr).size;
}

console.log(hasUniqueValues([1, 2, 3, 4])); // true
console.log(hasUniqueValues([1, 2, 2, 3])); // false
```

#### Tracking Unique Visitors

```javascript
const visitors = new Set();

function trackVisitor(userId) {
  visitors.add(userId);
}

trackVisitor("user1");
trackVisitor("user2");
trackVisitor("user1"); // Duplicate, not added

console.log(`Unique visitors: ${visitors.size}`); // 2
```

#### Finding Common Elements

```javascript
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const set1 = new Set(array1);
const common = array2.filter(item => set1.has(item));

console.log(common); // [4, 5]
```

## WeakSet

A WeakSet is similar to a Set but:
- Can only store **objects** (not primitives)
- References are **weak** (allows garbage collection)
- **Not iterable** (no forEach, for...of, keys(), values(), entries())
- **No size property**

### Creating a WeakSet

```javascript
const weakSet = new WeakSet();

// Can only add objects
const obj1 = { id: 1 };
const obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.add(obj2);

// Cannot add primitives
// weakSet.add(1); // TypeError
// weakSet.add("string"); // TypeError
```

### WeakSet Methods

#### add()

```javascript
const weakSet = new WeakSet();
const obj = { name: "Alice" };

weakSet.add(obj);

// Chaining works
weakSet.add({ id: 1 }).add({ id: 2 });
```

#### has()

```javascript
const weakSet = new WeakSet();
const obj1 = { id: 1 };
const obj2 = { id: 2 };

weakSet.add(obj1);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // false
```

#### delete()

```javascript
const weakSet = new WeakSet();
const obj = { name: "Alice" };

weakSet.add(obj);
console.log(weakSet.has(obj)); // true

weakSet.delete(obj);
console.log(weakSet.has(obj)); // false
```

### Garbage Collection with WeakSet

When an object is no longer referenced, it can be garbage collected even if it's in a WeakSet.

```javascript
let obj1 = { id: 1 };
let obj2 = { id: 2 };

const weakSet = new WeakSet();
weakSet.add(obj1);
weakSet.add(obj2);

// obj1 is still referenced, so it's in the WeakSet
console.log(weakSet.has(obj1)); // true

// Remove reference to obj1
obj1 = null;

// obj1 can now be garbage collected
// weakSet will automatically remove it (eventually)
```

### WeakSet Use Cases

#### Marking Objects

```javascript
const processedObjects = new WeakSet();

function processObject(obj) {
  if (processedObjects.has(obj)) {
    console.log("Already processed");
    return;
  }

  // Process the object
  console.log("Processing...");

  // Mark as processed
  processedObjects.add(obj);
}

const obj = { data: "..." };
processObject(obj); // Processing...
processObject(obj); // Already processed
```

#### Tracking DOM Elements

```javascript
const observedElements = new WeakSet();

function observeElement(element) {
  if (observedElements.has(element)) {
    return;
  }

  observedElements.add(element);

  // Set up observer
  element.addEventListener("click", handleClick);
}

function stopObserving(element) {
  observedElements.delete(element);
  element.removeEventListener("click", handleClick);
}
```

#### Preventing Circular References

```javascript
const processing = new WeakSet();

function processObject(obj) {
  if (processing.has(obj)) {
    throw new Error("Circular reference detected");
  }

  processing.add(obj);

  // Process object properties
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      processObject(obj[key]); // Recursive call
    }
  }

  processing.delete(obj);
}
```

## Set vs WeakSet Comparison

| Feature | Set | WeakSet |
|---------|-----|---------|
| **Values** | Any type | Objects only |
| **Garbage Collection** | Prevents GC | Allows GC |
| **Iterable** | Yes | No |
| **size property** | Yes | No |
| **forEach()** | Yes | No |
| **keys()/values()/entries()** | Yes | No |
| **clear()** | Yes | No |
| **Use Case** | General purpose | Memory-sensitive |

## Performance Considerations

- **Set lookup** is O(1) - very fast
- **Set add/delete** is O(1) - very fast
- **Array lookup** is O(n) - slower for large arrays

```javascript
// Slow with array (O(n))
const array = [1, 2, 3, 4, 5, /* ... thousands more ... */];
console.log(array.includes(9999)); // Has to check each item

// Fast with Set (O(1))
const set = new Set(array);
console.log(set.has(9999)); // Direct lookup
```

## Best Practices

1. **Use Set for unique collections** instead of checking array duplicates
2. **Use WeakSet for memory-sensitive operations** with objects
3. **Convert to array** when you need array methods
4. **Use Set for fast lookups** instead of `array.includes()`
5. **Use WeakSet to avoid memory leaks** when tracking objects

```javascript
// Good: Using Set for uniqueness
const uniqueIds = new Set();
uniqueIds.add(userId);

// Good: Using WeakSet for object tracking
const cachedObjects = new WeakSet();
cachedObjects.add(obj);

// Good: Converting when needed
const setValues = new Set([1, 2, 3]);
const arrayValues = [...setValues].map(x => x * 2);
```

## Summary

- **Set** - Collection of unique values of any type
  - Methods: `add()`, `has()`, `delete()`, `clear()`, `size`
  - Iterable: `forEach()`, `for...of`, `values()`, `keys()`, `entries()`
  - Use for: removing duplicates, fast lookups, set operations
- **WeakSet** - Collection of objects with weak references
  - Methods: `add()`, `has()`, `delete()`
  - Not iterable, allows garbage collection
  - Use for: tracking objects, preventing memory leaks

Sets and WeakSets are powerful tools for managing unique collections efficiently!
