# Node.js Core Modules

Node.js comes with built-in modules that provide essential functionality without requiring external dependencies.

## How to Use Core Modules

```javascript
// CommonJS (traditional)
const fs = require('fs');
const path = require('path');

// ES6 Modules (with "type": "module" in package.json)
import fs from 'fs';
import path from 'path';
```

## File System (fs)

The `fs` module provides file system operations.

### Reading Files

```javascript
const fs = require('fs');

// Asynchronous (callback)
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(data);
});

// Synchronous (blocks event loop - avoid in production)
try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error:', err);
}

// Promise-based (modern)
const fsPromises = require('fs').promises;

async function readFile() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}
```

### Writing Files

```javascript
const fs = require('fs');

// Asynchronous
fs.writeFile('output.txt', 'Hello World!', 'utf8', (err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File written successfully');
});

// Append to file
fs.appendFile('log.txt', 'New log entry\n', (err) => {
  if (err) throw err;
  console.log('Appended to file');
});

// Promise-based
async function writeFile() {
  try {
    await fs.promises.writeFile('output.txt', 'Hello World!', 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error:', err);
  }
}
```

### File Operations

```javascript
// Check if file exists
fs.access('file.txt', fs.constants.F_OK, (err) => {
  console.log(err ? 'File does not exist' : 'File exists');
});

// Get file stats
fs.stat('file.txt', (err, stats) => {
  if (err) throw err;
  console.log('Is file:', stats.isFile());
  console.log('Is directory:', stats.isDirectory());
  console.log('File size:', stats.size);
  console.log('Created:', stats.birthtime);
  console.log('Modified:', stats.mtime);
});

// Rename/move file
fs.rename('old.txt', 'new.txt', (err) => {
  if (err) throw err;
  console.log('File renamed');
});

// Delete file
fs.unlink('file.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});

// Copy file
fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('File copied');
});
```

### Directory Operations

```javascript
// Create directory
fs.mkdir('new-folder', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Directory created');
});

// Read directory
fs.readdir('./', (err, files) => {
  if (err) throw err;
  console.log('Files:', files);
});

// Read directory with file types
fs.readdir('./', { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    console.log(file.name, file.isDirectory() ? '[DIR]' : '[FILE]');
  });
});

// Remove directory
fs.rmdir('folder', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Directory removed');
});
```

### Watch Files

```javascript
// Watch for file changes
fs.watch('file.txt', (eventType, filename) => {
  console.log(`Event: ${eventType}`);
  console.log(`Filename: ${filename}`);
});

// Watch with options
fs.watchFile('file.txt', { interval: 1000 }, (curr, prev) => {
  console.log('File modified');
  console.log('Current:', curr.mtime);
  console.log('Previous:', prev.mtime);
});
```

## Path Module

The `path` module provides utilities for working with file and directory paths.

```javascript
const path = require('path');

// Join path segments
const fullPath = path.join('/users', 'john', 'documents', 'file.txt');
console.log(fullPath); // /users/john/documents/file.txt

// Resolve absolute path
const absolutePath = path.resolve('documents', 'file.txt');
console.log(absolutePath); // /current/directory/documents/file.txt

// Get directory name
console.log(path.dirname('/users/john/file.txt')); // /users/john

// Get file name
console.log(path.basename('/users/john/file.txt')); // file.txt
console.log(path.basename('/users/john/file.txt', '.txt')); // file

// Get file extension
console.log(path.extname('file.txt')); // .txt
console.log(path.extname('file.tar.gz')); // .gz

// Parse path
const parsed = path.parse('/users/john/file.txt');
console.log(parsed);
// {
//   root: '/',
//   dir: '/users/john',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// Format path
const formatted = path.format({
  dir: '/users/john',
  base: 'file.txt'
});
console.log(formatted); // /users/john/file.txt

// Normalize path
console.log(path.normalize('/users/john/../jane/./file.txt'));
// /users/jane/file.txt

// Check if path is absolute
console.log(path.isAbsolute('/users/john')); // true
console.log(path.isAbsolute('documents/file.txt')); // false

// Get relative path
console.log(path.relative('/users/john', '/users/jane'));
// ../jane

// Platform-specific separator
console.log(path.sep); // / on Unix, \ on Windows
console.log(path.delimiter); // : on Unix, ; on Windows
```

## Operating System (os)

The `os` module provides operating system-related utility methods.

```javascript
const os = require('os');

// System information
console.log('Platform:', os.platform()); // linux, darwin, win32
console.log('Architecture:', os.arch()); // x64, arm
console.log('CPU cores:', os.cpus().length);
console.log('Total memory:', os.totalmem());
console.log('Free memory:', os.freemem());
console.log('Uptime:', os.uptime(), 'seconds');
console.log('Hostname:', os.hostname());
console.log('OS Type:', os.type());
console.log('OS Release:', os.release());

// User information
console.log('Home directory:', os.homedir());
console.log('Temp directory:', os.tmpdir());
console.log('User info:', os.userInfo());

// Network interfaces
console.log('Network interfaces:', os.networkInterfaces());

// CPU information
os.cpus().forEach((cpu, index) => {
  console.log(`CPU ${index}:`, cpu.model, cpu.speed);
});

// End-of-line marker
console.log('EOL:', JSON.stringify(os.EOL)); // \n on Unix, \r\n on Windows
```

## HTTP Module

The `http` module allows Node.js to transfer data over HTTP.

### Creating a Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Request object
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);

  // Response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

### Routing

```javascript
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
  } else if (req.url === '/api/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ users: ['Alice', 'Bob'] }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});
```

### Making HTTP Requests

```javascript
const http = require('http');

const options = {
  hostname: 'api.example.com',
  port: 80,
  path: '/users',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
});

req.on('error', (err) => {
  console.error('Error:', err);
});

req.end();
```

## URL Module

The `url` module provides utilities for URL resolution and parsing.

```javascript
const url = require('url');

// Parse URL
const myURL = new URL('https://example.com:8080/path?name=John&age=30#section');

console.log('Protocol:', myURL.protocol); // https:
console.log('Hostname:', myURL.hostname); // example.com
console.log('Port:', myURL.port); // 8080
console.log('Pathname:', myURL.pathname); // /path
console.log('Search:', myURL.search); // ?name=John&age=30
console.log('Hash:', myURL.hash); // #section

// Search params
console.log('Name:', myURL.searchParams.get('name')); // John
console.log('Age:', myURL.searchParams.get('age')); // 30

// Modify search params
myURL.searchParams.append('city', 'NYC');
myURL.searchParams.set('age', '31');
myURL.searchParams.delete('name');
console.log(myURL.toString());

// Format URL
const formatted = url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/path',
  query: { name: 'John', age: 30 }
});
console.log(formatted);
```

## Query String Module

```javascript
const querystring = require('querystring');

// Parse query string
const parsed = querystring.parse('name=John&age=30&city=NYC');
console.log(parsed); // { name: 'John', age: '30', city: 'NYC' }

// Stringify object
const stringified = querystring.stringify({
  name: 'John',
  age: 30,
  city: 'NYC'
});
console.log(stringified); // name=John&age=30&city=NYC

// Custom separator and equals
const custom = querystring.stringify({ name: 'John', age: 30 }, ';', ':');
console.log(custom); // name:John;age:30
```

## Util Module

The `util` module provides utility functions.

```javascript
const util = require('util');

// Promisify (convert callback to promise)
const fs = require('fs');
const readFilePromise = util.promisify(fs.readFile);

async function readFile() {
  try {
    const data = await readFilePromise('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Format strings
console.log(util.format('Hello %s', 'World')); // Hello World
console.log(util.format('%d + %d = %d', 1, 2, 3)); // 1 + 2 = 3

// Inspect objects
const obj = { name: 'John', age: 30, address: { city: 'NYC' } };
console.log(util.inspect(obj, { depth: null, colors: true }));

// Type checking
console.log(util.types.isDate(new Date())); // true
console.log(util.types.isPromise(Promise.resolve())); // true
console.log(util.types.isRegExp(/test/)); // true

// Deprecate functions
const deprecatedFunction = util.deprecate(
  () => console.log('Old function'),
  'oldFunction() is deprecated. Use newFunction() instead.'
);
```

## Crypto Module

The `crypto` module provides cryptographic functionality.

```javascript
const crypto = require('crypto');

// Generate random bytes
crypto.randomBytes(16, (err, buffer) => {
  if (err) throw err;
  console.log('Random string:', buffer.toString('hex'));
});

// Hash (SHA-256)
const hash = crypto.createHash('sha256');
hash.update('Hello World');
console.log('Hash:', hash.digest('hex'));

// HMAC (Keyed-Hash)
const hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update('Hello World');
console.log('HMAC:', hmac.digest('hex'));

// Encryption (AES)
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encrypted) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const text = 'Secret Message';
const encrypted = encrypt(text);
console.log('Encrypted:', encrypted);
const decrypted = decrypt(encrypted);
console.log('Decrypted:', decrypted);

// Password hashing with bcrypt (requires npm install bcrypt)
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

async function verifyPassword(password, hash) {
  const match = await bcrypt.compare(password, hash);
  return match;
}
```

## Process Module

The `process` object provides information about the current Node.js process.

```javascript
// Environment variables
console.log(process.env.NODE_ENV);
console.log(process.env.PATH);

// Command line arguments
console.log(process.argv);
// node app.js arg1 arg2
// ['node', '/path/to/app.js', 'arg1', 'arg2']

// Current working directory
console.log(process.cwd());

// Change directory
process.chdir('/tmp');

// Process ID
console.log(process.pid);

// Platform
console.log(process.platform); // linux, darwin, win32

// Node version
console.log(process.version); // v18.17.0

// Memory usage
console.log(process.memoryUsage());

// CPU usage
console.log(process.cpuUsage());

// Uptime
console.log(process.uptime());

// Exit process
// process.exit(0); // Success
// process.exit(1); // Error

// Event listeners
process.on('exit', (code) => {
  console.log(`Process exiting with code: ${code}`);
});

process.on('beforeExit', (code) => {
  console.log('Before exit');
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
  process.exit(0);
});
```

## Child Process Module

The `child_process` module allows you to spawn child processes.

```javascript
const { exec, spawn, fork, execFile } = require('child_process');

// exec - Buffered output
exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Output:', stdout);
  console.error('Errors:', stderr);
});

// spawn - Streaming output
const ls = spawn('ls', ['-la']);

ls.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});

ls.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});

// fork - For Node.js scripts
const child = fork('child-script.js');

child.on('message', (msg) => {
  console.log('Message from child:', msg);
});

child.send({ hello: 'world' });

// In child-script.js:
// process.on('message', (msg) => {
//   console.log('Message from parent:', msg);
//   process.send({ response: 'received' });
// });
```

## Summary

Core modules provide essential functionality:

- **fs** - File system operations
- **path** - Path utilities
- **os** - Operating system info
- **http/https** - HTTP server/client
- **url** - URL parsing
- **crypto** - Cryptography
- **util** - Utility functions
- **process** - Process information
- **child_process** - Spawn processes

These modules are available without installation and form the foundation of Node.js applications!
