# Classes and Object-Oriented Programming in JavaScript

JavaScript supports Object-Oriented Programming (OOP) through prototypes and, since ES6, through class syntax. Understanding both is crucial for modern JavaScript development.

## Constructor Functions (Pre-ES6)

Before ES6 classes, constructor functions were used to create objects.

```javascript
// Constructor function (convention: capitalize first letter)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding methods to prototype
Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

// Creating instances
const alice = new Person("Alice", 30);
const bob = new Person("Bob", 25);

alice.greet(); // Hello, I'm Alice
bob.greet();   // Hello, I'm Bob

console.log(alice instanceof Person); // true
```

**What happens with `new`:**
1. Creates a new empty object
2. Sets the prototype of the new object
3. Binds `this` to the new object
4. Executes the constructor function
5. Returns the new object (unless constructor returns an object)

## ES6 Classes

ES6 introduced class syntax, which is syntactic sugar over prototype-based inheritance.

### Basic Class Syntax

```javascript
class Person {
  // Constructor method
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  // Another method
  celebrate Birthday() {
    this.age++;
    console.log(`Happy birthday! Now ${this.age} years old`);
  }
}

// Creating instances
const alice = new Person("Alice", 30);
alice.greet();              // Hello, I'm Alice
alice.celebrateBirthday();  // Happy birthday! Now 31 years old
```

### Getters and Setters

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
}

const person = new Person("John", "Doe");
console.log(person.fullName);  // John Doe (calls getter)

person.fullName = "Jane Smith"; // (calls setter)
console.log(person.firstName); // Jane
console.log(person.lastName);  // Smith
```

### Static Methods

Static methods belong to the class itself, not instances.

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static PI = 3.14159; // Static property (ES2022)
}

// Call on class, not instances
console.log(MathUtils.add(5, 3));      // 8
console.log(MathUtils.multiply(4, 2)); // 8
console.log(MathUtils.PI);             // 3.14159

// Cannot call on instances
const utils = new MathUtils();
// utils.add(5, 3); // TypeError: utils.add is not a function
```

### Static Blocks (ES2022)

```javascript
class Config {
  static apiKey;
  static endpoint;

  // Static initialization block
  static {
    // Complex initialization logic
    this.apiKey = process.env.API_KEY || "default-key";
    this.endpoint = process.env.ENDPOINT || "https://api.example.com";
    console.log("Config initialized");
  }
}

console.log(Config.apiKey);
```

## Inheritance

### Extending Classes

```javascript
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  // Override parent method
  speak() {
    console.log(`${this.name} barks`);
  }

  // New method specific to Dog
  fetch() {
    console.log(`${this.name} is fetching`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();  // Buddy barks
dog.move();   // Buddy is moving
dog.fetch();  // Buddy is fetching
```

### Calling Parent Methods with super

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // Call parent method
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy");
dog.speak();
// Output:
// Buddy makes a sound
// Buddy barks
```

### Multi-Level Inheritance

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Mammal extends Animal {
  constructor(name, furColor) {
    super(name);
    this.furColor = furColor;
  }

  nurseYoung() {
    console.log(`${this.name} is nursing its young`);
  }
}

class Dog extends Mammal {
  constructor(name, furColor, breed) {
    super(name, furColor);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy", "golden", "Golden Retriever");
dog.eat();         // Buddy is eating (from Animal)
dog.nurseYoung();  // Buddy is nursing its young (from Mammal)
dog.bark();        // Buddy barks (from Dog)
```

## Private Fields and Methods (ES2022)

### Private Fields

Fields starting with `#` are private and cannot be accessed outside the class.

```javascript
class BankAccount {
  #balance = 0; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);   // Deposited 500. New balance: 1500
account.withdraw(200);  // Withdrew 200. New balance: 1300
console.log(account.getBalance()); // 1300

// Cannot access private field
// console.log(account.#balance); // SyntaxError
```

### Private Methods

```javascript
class DataProcessor {
  #data = [];

  addData(item) {
    this.#validate(item);
    this.#data.push(item);
  }

  // Private method
  #validate(item) {
    if (!item || typeof item !== "object") {
      throw new Error("Invalid data");
    }
  }

  getData() {
    return [...this.#data]; // Return copy
  }
}

const processor = new DataProcessor();
processor.addData({ name: "Alice" }); // Works
// processor.#validate({}); // SyntaxError: Private method
```

### Private Static Fields and Methods

```javascript
class Counter {
  static #count = 0;

  static increment() {
    this.#count++;
  }

  static getCount() {
    return this.#count;
  }

  static #reset() {
    this.#count = 0;
  }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // 2
// console.log(Counter.#count); // SyntaxError
```

## Prototypal Inheritance

JavaScript uses prototypal inheritance, where objects inherit from other objects.

### Understanding Prototypes

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const alice = new Person("Alice");

// Prototype chain
console.log(alice.__proto__ === Person.prototype);        // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__);                  // null

// Check prototype
console.log(alice instanceof Person);  // true
console.log(alice instanceof Object);  // true
```

### Object.create()

Creates a new object with specified prototype.

```javascript
const personPrototype = {
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

const alice = Object.create(personPrototype);
alice.name = "Alice";
alice.greet(); // Hello, I'm Alice

console.log(Object.getPrototypeOf(alice) === personPrototype); // true
```

### Prototype Chain

```javascript
const animal = {
  eat() {
    console.log("Eating...");
  }
};

const mammal = Object.create(animal);
mammal.nurseYoung = function() {
  console.log("Nursing young...");
};

const dog = Object.create(mammal);
dog.bark = function() {
  console.log("Barking...");
};

// dog can access methods from entire chain
dog.bark();        // Barking...
dog.nurseYoung();  // Nursing young...
dog.eat();         // Eating...
```

## The Four Pillars of OOP

### 1. Encapsulation

Bundling data and methods that work on that data within a class.

```javascript
class Car {
  #speed = 0;
  #fuel = 100;

  constructor(brand) {
    this.brand = brand;
  }

  accelerate() {
    if (this.#fuel > 0) {
      this.#speed += 10;
      this.#fuel -= 5;
    }
  }

  brake() {
    this.#speed = Math.max(0, this.#speed - 10);
  }

  getStatus() {
    return {
      brand: this.brand,
      speed: this.#speed,
      fuel: this.#fuel
    };
  }
}

const car = new Car("Toyota");
car.accelerate();
console.log(car.getStatus()); // { brand: 'Toyota', speed: 10, fuel: 95 }
```

### 2. Inheritance

Creating new classes based on existing classes.

```javascript
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  move() {
    console.log(`${this.brand} is moving`);
  }
}

class Car extends Vehicle {
  constructor(brand, doors) {
    super(brand);
    this.doors = doors;
  }

  openDoors() {
    console.log(`Opening ${this.doors} doors`);
  }
}

class Motorcycle extends Vehicle {
  constructor(brand, hasWindshield) {
    super(brand);
    this.hasWindshield = hasWindshield;
  }

  wheelie() {
    console.log("Doing a wheelie!");
  }
}
```

### 3. Polymorphism

Objects of different classes can be treated through the same interface.

```javascript
class Shape {
  area() {
    throw new Error("area() must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Polymorphism in action
const shapes = [
  new Circle(5),
  new Rectangle(4, 6),
  new Circle(3)
];

shapes.forEach(shape => {
  console.log(`Area: ${shape.area()}`);
});
```

### 4. Abstraction

Hiding complex implementation details and showing only necessary features.

```javascript
class Database {
  #connection = null;

  connect() {
    this.#connection = this.#createConnection();
    console.log("Connected to database");
  }

  // Hide implementation details
  #createConnection() {
    // Complex connection logic
    return { connected: true };
  }

  query(sql) {
    if (!this.#connection) {
      throw new Error("Not connected");
    }
    // Hide complex query execution
    return this.#executeQuery(sql);
  }

  #executeQuery(sql) {
    // Complex execution logic
    return { results: [] };
  }
}

// User doesn't need to know about connection details
const db = new Database();
db.connect();
db.query("SELECT * FROM users");
```

## Composition Over Inheritance

Sometimes composition is better than inheritance.

```javascript
// Behaviors as separate objects
const canEat = {
  eat(food) {
    console.log(`Eating ${food}`);
  }
};

const canWalk = {
  walk() {
    console.log("Walking...");
  }
};

const canSwim = {
  swim() {
    console.log("Swimming...");
  }
};

// Compose objects
function createDog(name) {
  return {
    name,
    ...canEat,
    ...canWalk
  };
}

function createFish(name) {
  return {
    name,
    ...canEat,
    ...canSwim
  };
}

const dog = createDog("Buddy");
dog.eat("bone"); // Eating bone
dog.walk();      // Walking...

const fish = createFish("Nemo");
fish.eat("plankton"); // Eating plankton
fish.swim();          // Swimming...
```

## Method Chaining

Return `this` to enable method chaining.

```javascript
class Calculator {
  constructor() {
    this.value = 0;
  }

  add(n) {
    this.value += n;
    return this; // Enable chaining
  }

  subtract(n) {
    this.value -= n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  divide(n) {
    this.value /= n;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const result = new Calculator()
  .add(10)
  .multiply(2)
  .subtract(5)
  .divide(3)
  .getResult();

console.log(result); // 5
```

## instanceof vs typeof

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const alice = new Person("Alice");

console.log(typeof alice);           // "object"
console.log(alice instanceof Person); // true
console.log(alice instanceof Object); // true

console.log(typeof Person);          // "function"
console.log(Person instanceof Function); // true
```

## Common Patterns

### Singleton Pattern

```javascript
class Database {
  static #instance = null;

  constructor() {
    if (Database.#instance) {
      return Database.#instance;
    }
    Database.#instance = this;
    this.connection = "Database connection";
  }

  query() {
    console.log("Executing query...");
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true (same instance)
```

### Factory Pattern

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

class AnimalFactory {
  static createAnimal(type, name) {
    switch (type) {
      case "dog":
        return new Dog(name);
      case "cat":
        return new Cat(name);
      default:
        throw new Error("Unknown animal type");
    }
  }
}

const dog = AnimalFactory.createAnimal("dog", "Buddy");
const cat = AnimalFactory.createAnimal("cat", "Whiskers");
console.log(dog.speak()); // Woof!
console.log(cat.speak()); // Meow!
```

## Best Practices

1. **Use classes for clear object blueprints**
2. **Make fields private** when they shouldn't be accessed directly
3. **Use getters/setters** for controlled access
4. **Favor composition over inheritance** when possible
5. **Keep classes focused** (Single Responsibility Principle)
6. **Use static methods** for utility functions
7. **Implement toString()** for better debugging

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `Person(name: ${this.name}, age: ${this.age})`;
  }
}

const alice = new Person("Alice", 30);
console.log(String(alice)); // Person(name: Alice, age: 30)
```

## Summary

- **Classes** are syntactic sugar over prototypal inheritance
- **Constructor** initializes instances
- **Methods** define behavior
- **Static methods/properties** belong to the class
- **Private fields (#)** provide encapsulation
- **Inheritance (extends)** creates class hierarchies
- **super** calls parent class methods
- **Four pillars**: Encapsulation, Inheritance, Polymorphism, Abstraction
- **Composition** is often better than deep inheritance

Mastering OOP concepts in JavaScript is essential for building scalable applications!
