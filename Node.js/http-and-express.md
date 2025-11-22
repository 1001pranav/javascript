# HTTP and Express in Node.js

This guide covers building web servers and APIs using the built-in `http` module and the popular Express.js framework.

## HTTP Module

The built-in `http` module allows you to create HTTP servers and clients.

### Creating a Basic Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

### Request Object (req)

```javascript
const server = http.createServer((req, res) => {
  console.log('Method:', req.method);     // GET, POST, PUT, DELETE
  console.log('URL:', req.url);           // /path?query=string
  console.log('Headers:', req.headers);   // Request headers
  console.log('HTTP Version:', req.httpVersion); // 1.1

  // Parse URL
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log('Pathname:', url.pathname);
  console.log('Query:', url.searchParams.get('query'));

  res.end('Request logged');
});
```

### Response Object (res)

```javascript
const server = http.createServer((req, res) => {
  // Set status code and headers
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'X-Custom-Header': 'value'
  });

  // Or set individually
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Write response body
  res.write('<h1>Hello</h1>');
  res.write('<p>World!</p>');

  // End response
  res.end();

  // Or write and end in one call
  // res.end('<h1>Hello World!</h1>');
});
```

### Basic Routing

```javascript
const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  }
  else if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
  }
  else if (url === '/api/data' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'API data' }));
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});
```

### Handling POST Requests

```javascript
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/users') {
    let body = '';

    // Collect data chunks
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    // Process complete data
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('Received data:', data);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          message: 'User created',
          data: data
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });

    req.on('error', (err) => {
      console.error('Request error:', err);
      res.writeHead(500);
      res.end('Internal Server Error');
    });
  }
});
```

### Serving Static Files

```javascript
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Security: prevent directory traversal
  const safePath = path.normalize(req.url).replace(/^(\.\.(\/|\\|$))+/, '');
  const filepath = path.join(__dirname, 'public', safePath);

  fs.readFile(filepath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
      return;
    }

    // Set content type based on file extension
    const ext = path.extname(filepath);
    const contentTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon'
    };

    const contentType = contentTypes[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});
```

## Express.js

Express is a minimal and flexible Node.js web application framework.

### Installation

```bash
npm install express
```

### Basic Express Server

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Middleware

Middleware functions have access to `req`, `res`, and `next`.

```javascript
// Application-level middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Time:', Date.now());
  next(); // Pass control to next middleware
});

// Built-in middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('public')); // Serve static files

// Third-party middleware
const cors = require('cors');
const morgan = require('morgan');

app.use(cors()); // Enable CORS
app.use(morgan('dev')); // HTTP request logger

// Custom middleware
const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);
```

### Routing

```javascript
// Basic routes
app.get('/', (req, res) => {
  res.send('GET request to homepage');
});

app.post('/', (req, res) => {
  res.send('POST request to homepage');
});

app.put('/user', (req, res) => {
  res.send('PUT request to /user');
});

app.delete('/user', (req, res) => {
  res.send('DELETE request to /user');
});

// Route parameters
app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.get('/users/:userId/posts/:postId', (req, res) => {
  res.send(`User ${req.params.userId}, Post ${req.params.postId}`);
});

// Query parameters
app.get('/search', (req, res) => {
  const { q, page, limit } = req.query;
  res.json({ query: q, page, limit });
});
// GET /search?q=javascript&page=1&limit=10

// Route patterns
app.get('/ab?cd', (req, res) => {
  // Matches acd, abcd
  res.send('ab?cd');
});

app.get('/ab+cd', (req, res) => {
  // Matches abcd, abbcd, abbbcd, etc.
  res.send('ab+cd');
});

app.get('/ab*cd', (req, res) => {
  // Matches abcd, abxcd, abRANDOMcd, ab123cd, etc.
  res.send('ab*cd');
});

app.get('/ab(cd)?e', (req, res) => {
  // Matches /abe and /abcde
  res.send('ab(cd)?e');
});
```

### Response Methods

```javascript
app.get('/examples', (req, res) => {
  // Send string
  res.send('Hello World');

  // Send JSON
  res.json({ message: 'Hello World' });

  // Send with status
  res.status(201).json({ created: true });

  // Send file
  res.sendFile('/path/to/file.html');

  // Download file
  res.download('/path/to/file.pdf');

  // Redirect
  res.redirect('/other-page');
  res.redirect(301, '/moved-permanently');

  // Render view (with template engine)
  res.render('index', { title: 'Home' });

  // Set headers
  res.set('Content-Type', 'text/plain');
  res.set({
    'Content-Type': 'text/plain',
    'Content-Length': '123'
  });

  // End response
  res.end();
});
```

### Router

Organize routes into modules.

```javascript
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get user ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create user', data: req.body });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update user ${req.params.id}`, data: req.body });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete user ${req.params.id}` });
});

module.exports = router;

// app.js
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);
```

### Error Handling

```javascript
// 404 handler (should be after all routes)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handling middleware (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: {
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});

// Throwing errors
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong');
  err.status = 500;
  next(err); // Pass to error handler
});

// Async error handling
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/async', asyncHandler(async (req, res) => {
  const data = await someAsyncOperation();
  res.json(data);
}));
```

### Full REST API Example

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// In-memory data store
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// CREATE user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  // Validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(index, 1);
  res.status(204).send(); // No content
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});
```

### Validation with Joi

```javascript
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).max(150)
});

app.post('/api/users', (req, res) => {
  // Validate request body
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Create user with validated data
  const newUser = {
    id: users.length + 1,
    ...value
  };

  users.push(newUser);
  res.status(201).json(newUser);
});
```

### Authentication Middleware

```javascript
const jwt = require('jsonwebtoken');

// Generate token
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Validate credentials (simplified)
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  });
};

// Protected route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});
```

### CORS Configuration

```javascript
const cors = require('cors');

// Enable for all routes
app.use(cors());

// Configure CORS
app.use(cors({
  origin: 'http://example.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Multiple origins
const allowedOrigins = ['http://localhost:3000', 'https://example.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
```

### File Upload

```javascript
const multer = require('multer');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image file'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB
});

// Single file upload
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.json({
    message: 'File uploaded successfully',
    file: {
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size
    }
  });
});

// Multiple files
app.post('/api/upload-multiple', upload.array('images', 5), (req, res) => {
  res.json({
    message: 'Files uploaded successfully',
    files: req.files.map(f => ({
      filename: f.filename,
      size: f.size
    }))
  });
});
```

### Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});

// Apply to all routes
app.use(limiter);

// Apply to specific routes
app.use('/api/', limiter);

// Different limits for different routes
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: 'Too many accounts created, please try again later.'
});

app.post('/api/register', createAccountLimiter, (req, res) => {
  // Create account
});
```

### Security Headers (Helmet)

```javascript
const helmet = require('helmet');

// Use all default protections
app.use(helmet());

// Or customize
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));
```

## Best Practices

1. **Use Express for production** - More features than raw HTTP
2. **Organize routes** - Use Router for modularity
3. **Validate input** - Always validate user input
4. **Handle errors properly** - Use error handling middleware
5. **Use middleware** - For cross-cutting concerns
6. **Secure your app** - Use helmet, CORS, rate limiting
7. **Use environment variables** - For configuration
8. **Log requests** - Use morgan or winston
9. **Enable compression** - Use compression middleware
10. **Use async/await** - For cleaner async code

## Summary

- **HTTP module** - Built-in, low-level HTTP functionality
- **Express.js** - Fast, minimalist web framework
- **Middleware** - Functions that process requests
- **Routing** - Map URLs to handlers
- **Error handling** - Centralized error management
- **Security** - helmet, CORS, rate limiting, validation
- **File uploads** - Use multer
- **Authentication** - JWT tokens, middleware

Express makes building web servers and APIs much easier than raw HTTP!
