# Node.js - Complete Guide

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, enabling full-stack JavaScript development.

## What is Node.js?

Node.js is:
- **JavaScript Runtime** - Execute JavaScript outside the browser
- **Event-Driven** - Built around an event-driven, non-blocking I/O model
- **Single-Threaded** - Uses a single thread with event loop
- **Asynchronous** - Non-blocking operations for high concurrency
- **Cross-Platform** - Runs on Windows, macOS, Linux

## Key Features

### 1. Asynchronous and Event-Driven
All APIs are asynchronous (non-blocking), meaning the server doesn't wait for data to return.

```javascript
const fs = require('fs');

// Asynchronous - doesn't block
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('This runs first!');
```

### 2. Fast Execution
Built on Chrome's V8 engine, which compiles JavaScript to native machine code.

### 3. Single-Threaded but Highly Scalable
Uses event loop to handle concurrent operations without creating threads for each request.

### 4. NPM (Node Package Manager)
Largest ecosystem of open-source libraries in the world.

### 5. No Buffering
Node.js applications never buffer data, outputting data in chunks.

## When to Use Node.js

**Ideal For:**
- ✅ Real-time applications (chat, gaming, collaboration)
- ✅ RESTful APIs and microservices
- ✅ Streaming applications
- ✅ Single Page Applications (SPAs)
- ✅ I/O intensive operations
- ✅ Data-intensive real-time applications

**Not Ideal For:**
- ❌ CPU-intensive operations (video encoding, complex calculations)
- ❌ Tasks requiring heavy computation

## Getting Started

### Installation

```bash
# Check if Node.js is installed
node --version
npm --version

# Download from https://nodejs.org/
# Or use version manager (nvm - recommended)

# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install latest Node.js
nvm install node

# Install specific version
nvm install 18.17.0

# Use specific version
nvm use 18.17.0
```

### First Node.js Program

```javascript
// app.js
console.log('Hello from Node.js!');

// Run with: node app.js
```

### Simple HTTP Server

```javascript
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// Run with: node server.js
```

## Node.js Architecture

For detailed architecture and event loop explanation, see [Node.js Architecture](/0%20-%20Introduction/architecture.md).

**Key Components:**
1. **V8 Engine** - Executes JavaScript code
2. **libuv** - Provides event loop and asynchronous I/O
3. **Core Modules** - Built-in modules (fs, http, path, etc.)
4. **Event Loop** - Handles asynchronous operations

## Core Concepts

### 1. Modules

Node.js uses modules to organize code. Three types:
- **Core Modules** - Built-in (fs, http, path, os, etc.)
- **Local Modules** - Your own modules
- **Third-Party Modules** - Installed via npm

```javascript
// Using core module
const fs = require('fs');

// Using local module
const myModule = require('./myModule');

// Using third-party module
const express = require('express');
```

### 2. Global Objects

Objects available in all modules:

```javascript
console.log(__dirname);  // Current directory path
console.log(__filename); // Current file path
console.log(process);    // Process information
console.log(global);     // Global namespace object

// Timers
setTimeout(() => console.log('After 1 second'), 1000);
setInterval(() => console.log('Every 2 seconds'), 2000);
setImmediate(() => console.log('Immediate'));
```

### 3. Process Object

Information about the current Node.js process:

```javascript
// Environment variables
console.log(process.env.NODE_ENV);

// Command line arguments
console.log(process.argv);

// Current working directory
console.log(process.cwd());

// Exit the process
process.exit(0);

// Event handlers
process.on('exit', (code) => {
  console.log(`Exiting with code: ${code}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});
```

### 4. Asynchronous Patterns

#### Callbacks (Traditional)
```javascript
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(data);
});
```

#### Promises
```javascript
const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));
```

#### Async/Await (Modern)
```javascript
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

readFile();
```

## Project Structure

### Basic Structure

```
my-node-app/
├── node_modules/      # Dependencies
├── src/               # Source code
│   ├── controllers/   # Route controllers
│   ├── models/        # Data models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   ├── utils/         # Utility functions
│   └── app.js         # App setup
├── public/            # Static files
├── tests/             # Test files
├── .env               # Environment variables
├── .gitignore         # Git ignore file
├── package.json       # Project metadata
└── README.md          # Project documentation
```

## Environment Variables

```javascript
// .env file
PORT=3000
DB_HOST=localhost
DB_USER=admin
DB_PASS=secret
NODE_ENV=development

// Load with dotenv
require('dotenv').config();

console.log(process.env.PORT); // 3000
console.log(process.env.DB_HOST); // localhost
```

## Error Handling

### Try-Catch (Sync)
```javascript
try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error:', err);
}
```

### Error-First Callbacks
```javascript
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(data);
});
```

### Promise Error Handling
```javascript
fs.promises.readFile('file.txt', 'utf8')
  .catch(err => console.error('Error:', err));
```

### Async/Await Error Handling
```javascript
async function readFile() {
  try {
    const data = await fs.promises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}
```

### Global Error Handlers
```javascript
// Uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

// Unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
```

## Debugging Node.js

### Console Debugging
```javascript
console.log('Debug message');
console.error('Error message');
console.warn('Warning message');
console.table([{ name: 'Alice', age: 30 }]);
console.time('timer');
// ... code ...
console.timeEnd('timer');
```

### Node Inspector
```bash
# Start with inspector
node --inspect app.js

# Start with inspector and break at start
node --inspect-brk app.js

# Open chrome://inspect in Chrome browser
```

### Using Debugger
```javascript
function add(a, b) {
  debugger; // Breakpoint
  return a + b;
}

// Run with: node inspect app.js
```

### VS Code Debugging
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js"
    }
  ]
}
```

## Performance Best Practices

1. **Use Async Operations**
```javascript
// Bad - Synchronous (blocks event loop)
const data = fs.readFileSync('file.txt');

// Good - Asynchronous
fs.readFile('file.txt', (err, data) => {
  // Process data
});
```

2. **Use Streams for Large Files**
```javascript
// Bad - Loads entire file in memory
fs.readFile('large-file.txt', (err, data) => {
  res.send(data);
});

// Good - Streams data in chunks
const stream = fs.createReadStream('large-file.txt');
stream.pipe(res);
```

3. **Cluster Module for CPU-Intensive Tasks**
```javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Worker processes
  require('./app.js');
}
```

4. **Enable Gzip Compression**
```javascript
const compression = require('compression');
app.use(compression());
```

5. **Use Connection Pooling**
```javascript
// Database connection pooling
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});
```

## Security Best Practices

1. **Don't Use eval()**
2. **Validate Input**
3. **Use HTTPS**
4. **Set Secure HTTP Headers** (helmet.js)
5. **Prevent SQL Injection** (use parameterized queries)
6. **Rate Limiting**
7. **Keep Dependencies Updated**
8. **Use Environment Variables for Secrets**
9. **Implement Authentication & Authorization**
10. **Enable CORS Properly**

```javascript
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

app.use(helmet()); // Security headers

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);
```

## Common Node.js Modules

| Module | Purpose |
|--------|---------|
| `fs` | File system operations |
| `http`/`https` | HTTP server and client |
| `path` | File path utilities |
| `os` | Operating system info |
| `events` | Event emitter |
| `stream` | Streaming data |
| `crypto` | Cryptography |
| `url` | URL parsing |
| `querystring` | Query string parsing |
| `util` | Utility functions |

## Popular NPM Packages

| Package | Purpose |
|---------|---------|
| `express` | Web framework |
| `mongoose` | MongoDB ODM |
| `axios` | HTTP client |
| `lodash` | Utility library |
| `dotenv` | Environment variables |
| `jsonwebtoken` | JWT authentication |
| `bcrypt` | Password hashing |
| `nodemon` | Auto-restart on changes |
| `joi` | Validation |
| `winston` | Logging |

## Learning Resources

- [Official Node.js Docs](https://nodejs.org/docs/)
- [Node.js GitHub](https://github.com/nodejs/node)
- [NPM Registry](https://www.npmjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

## Next Steps

Explore detailed guides:
1. [Core Modules](./core-modules.md) - fs, path, http, os, events
2. [File System](./file-system.md) - Reading, writing, streams
3. [HTTP & Express](./http-and-express.md) - Building web servers
4. [Streams & Buffers](./streams-and-buffers.md) - Efficient data handling
5. [Events](./events.md) - EventEmitter pattern
6. [NPM Guide](./npm.md) - Package management
7. [Best Practices](./best-practices.md) - Production-ready code

## Summary

- **Node.js** - JavaScript runtime for server-side development
- **Event-Driven** - Asynchronous, non-blocking I/O
- **Single-Threaded** - Uses event loop for concurrency
- **NPM** - Massive ecosystem of packages
- **Ideal for** - I/O intensive, real-time applications
- **Not ideal for** - CPU-intensive operations

Master Node.js to build fast, scalable network applications! 🚀
