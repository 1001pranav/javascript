# Events and EventEmitter in Node.js

Node.js is built around an event-driven architecture. The `events` module provides the EventEmitter class for implementing the observer pattern.

## EventEmitter Basics

```javascript
const EventEmitter = require('events');

// Create event emitter
const emitter = new EventEmitter();

// Register event listener
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit event
emitter.emit('greet', 'Alice'); // Output: Hello, Alice!
```

## Creating Custom EventEmitters

```javascript
const EventEmitter = require('events');

class UserManager extends EventEmitter {
  createUser(name) {
    console.log(`Creating user: ${name}`);

    // Emit event
    this.emit('userCreated', { name, timestamp: Date.now() });
  }

  deleteUser(name) {
    console.log(`Deleting user: ${name}`);
    this.emit('userDeleted', { name });
  }
}

const manager = new UserManager();

manager.on('userCreated', (data) => {
  console.log('User created event:', data);
});

manager.on('userDeleted', (data) => {
  console.log('User deleted event:', data);
});

manager.createUser('Alice');
manager.deleteUser('Bob');
```

## Event Listener Methods

```javascript
const emitter = new EventEmitter();

// on() - Add listener (alias: addListener)
emitter.on('event', () => console.log('Listener 1'));

// once() - Execute only once
emitter.once('event', () => console.log('Listener 2 (once)'));

// prependListener() - Add to beginning
emitter.prependListener('event', () => console.log('Listener 0 (first)'));

// Emit events
emitter.emit('event');
// Output:
// Listener 0 (first)
// Listener 1
// Listener 2 (once)

emitter.emit('event');
// Output:
// Listener 0 (first)
// Listener 1
// (Listener 2 doesn't run again)

// removeListener() - Remove specific listener
const handler = () => console.log('Handler');
emitter.on('test', handler);
emitter.removeListener('test', handler);

// removeAllListeners() - Remove all listeners
emitter.removeAllListeners('event');
```

## Event Parameters

```javascript
emitter.on('data', (id, name, email) => {
  console.log('ID:', id);
  console.log('Name:', name);
  console.log('Email:', email);
});

emitter.emit('data', 1, 'Alice', 'alice@example.com');

// Better: Use object for multiple parameters
emitter.on('user', (user) => {
  console.log('User:', user);
});

emitter.emit('user', {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
});
```

## Error Handling

```javascript
const emitter = new EventEmitter();

// Always handle 'error' events
emitter.on('error', (err) => {
  console.error('Error occurred:', err);
});

// Emit error
emitter.emit('error', new Error('Something went wrong'));

// If no error listener, Node.js throws exception
const emitter2 = new EventEmitter();
// emitter2.emit('error', new Error('Unhandled')); // Throws!
```

## Listener Information

```javascript
const emitter = new EventEmitter();

const listener1 = () => {};
const listener2 = () => {};

emitter.on('test', listener1);
emitter.on('test', listener2);

// Get listener count
console.log(emitter.listenerCount('test')); // 2

// Get all listeners
console.log(emitter.listeners('test')); // [listener1, listener2]

// Get all event names
console.log(emitter.eventNames()); // ['test']

// Get raw listeners (includes wrapper for once())
console.log(emitter.rawListeners('test'));
```

## Max Listeners

```javascript
const emitter = new EventEmitter();

// Default max is 10
console.log(emitter.getMaxListeners()); // 10

// Set max listeners
emitter.setMaxListeners(20);

// Set globally
EventEmitter.defaultMaxListeners = 15;

// Warning emitted if exceeded
for (let i = 0; i < 15; i++) {
  emitter.on('test', () => {});
}
// Warning: Possible EventEmitter memory leak detected
```

## Real-World Examples

### HTTP Server Events

```javascript
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  res.end('Hello World');
});

server.on('connection', (socket) => {
  console.log('New connection');
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(3000);
```

### Custom Logger

```javascript
class Logger extends EventEmitter {
  log(level, message) {
    this.emit('log', { level, message, timestamp: new Date() });
  }

  info(message) {
    this.log('info', message);
  }

  error(message) {
    this.log('error', message);
  }

  warn(message) {
    this.log('warn', message);
  }
}

const logger = new Logger();

logger.on('log', (data) => {
  console.log(`[${data.level.toUpperCase()}] ${data.message}`);
});

logger.info('Application started');
logger.error('Something went wrong');
logger.warn('Low memory');
```

### Pub/Sub Pattern

```javascript
class PubSub extends EventEmitter {
  subscribe(event, callback) {
    this.on(event, callback);
  }

  unsubscribe(event, callback) {
    this.removeListener(event, callback);
  }

  publish(event, data) {
    this.emit(event, data);
  }
}

const pubsub = new PubSub();

// Subscribers
pubsub.subscribe('newMessage', (msg) => {
  console.log('Email notification:', msg);
});

pubsub.subscribe('newMessage', (msg) => {
  console.log('Push notification:', msg);
});

// Publisher
pubsub.publish('newMessage', 'You have a new message!');
```

## Best Practices

1. **Always handle 'error' events** - Prevents crashes
2. **Use descriptive event names** - 'userCreated' not 'create'
3. **Document events** - List all events your class emits
4. **Remove listeners** - Prevent memory leaks
5. **Use once() for one-time events** - Like 'ready'
6. **Return emitter for chaining** - Fluent interface
7. **Emit after state change** - Ensure consistency

## Summary

- **EventEmitter** - Core class for event-driven programming
- **on()** - Register listeners
- **emit()** - Trigger events
- **once()** - One-time listeners
- **removeListener()** - Clean up
- **error event** - Must always be handled
- **Extends EventEmitter** - Create custom event-driven classes

Events enable loose coupling and reactive programming in Node.js!
