### Design Patterns in Node.js/JavaScript: A CheatSheet

Design patterns offer reusable solutions to commonly occurring problems within a given context in software design. They are not finished designs that can be transformed directly into code, but rather templates for how to solve a problem. In the context of Node.js and JavaScript, certain patterns are particularly prevalent and useful due to the language's single-threaded, event-driven, and asynchronous nature.

-----

### Creation Patterns

These patterns deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.

| Pattern | Use Case | Example |
| :--- | :--- | :--- |
| **Factory** | When the exact type of the object to be created is determined at runtime. It provides a generic interface for creating objects in a superclass but lets subclasses alter the type of objects that will be created. | A logging utility that can create different types of loggers (e.g., console, file, database) based on configuration. |
| **Singleton** | Ensures that a class has only one instance and provides a global point of access to it. | A database connection pool or a configuration manager that should only be instantiated once throughout the application. |
| **Builder** | To construct complex objects step by step. It allows you to produce different types and representations of an object using the same construction process. | Building a complex user profile object with multiple optional fields like name, age, address, and profile picture. |
| **Prototype** | To create new objects by copying an existing object, known as the prototype. | When creating many similar objects, such as in a game where you need to spawn multiple enemies of the same type. |



-----

### Structural Patterns

These patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

| Pattern | Use Case | Example |
| :--- | :--- | :--- |
| **Adapter** | Allows objects with incompatible interfaces to collaborate. | Using a third-party library with a different API by creating a wrapper that conforms to your application's existing interface. |
| **Decorator** | To add new functionalities to an object dynamically without altering its structure. | Adding logging or caching functionality to an existing data service object. |
| **Facade** | Provides a simplified interface to a library, a framework, or any other complex set of classes. | A simple API for a complex subsystem, like a single `startServer()` function that handles all the intricacies of setting up a web server. |
| **Proxy** | To provide a surrogate or placeholder for another object to control access to it. | Implementing rate-limiting, caching, or logging for API requests before forwarding them to the actual service. |

-----

### Behavioral Patterns

These patterns are concerned with algorithms and the assignment of responsibilities between objects.

| Pattern | Use Case | Example |
| :--- | :--- | :--- |
| **Observer** | To define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. | In Node.js, `EventEmitter` is a prime example. Event listeners (observers) are notified when an event (subject) occurs. |
| **Strategy** | To define a family of algorithms, encapsulate each one, and make them interchangeable. It lets the algorithm vary independently from clients that use it. | Implementing different payment methods (e.g., credit card, PayPal, bank transfer) where the client can choose the strategy at runtime. |
| **Middleware (Chain of Responsibility)** | To create a chain of handler objects for a request. Each handler decides either to process the request or to pass it to the next handler in the chain. | Extensively used in web frameworks like Express.js for handling HTTP requests through a series of functions for logging, authentication, validation, etc. |
| **Command** | To turn a request into a stand-alone object that contains all information about the request. | Implementing a queue of tasks to be executed, where each task is a command object with an `execute` method. |


-----

### Asynchronous Patterns in Node.js

Given Node.js's non-blocking I/O model, handling asynchronicity is crucial.

| Pattern | Use Case | Example |
| :--- | :--- | :--- |
| **Callbacks** | A function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action. | Reading a file using `fs.readFile('file.txt', (err, data) => { ... })`. |
| **Promises** | An object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. | Using `fetch('api/data').then(response => ...).catch(error => ...)`. |
| **Async/Await** | Syntactic sugar built on top of Promises, allowing you to write asynchronous code that looks and behaves a little more like synchronous code. | `async function fetchData() { try { const data = await fetch('api/data'); ... } catch (error) { ... } }` |
