# Node.js Best Practices

A comprehensive guide to writing production-ready Node.js applications.

## Project Structure

### Recommended Structure

```
my-app/
├── src/
│   ├── controllers/       # Request handlers
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── services/          # Business logic
│   ├── utils/             # Helper functions
│   ├── config/            # Configuration
│   └── app.js             # App setup
├── tests/                 # Test files
├── public/                # Static files
├── logs/                  # Log files
├── .env                   # Environment variables
├── .env.example           # Example env file
├── .gitignore            # Git ignore
├── .eslintrc.json        # ESLint config
├── .prettierrc           # Prettier config
├── package.json          # Dependencies
├── README.md             # Documentation
└── server.js             # Entry point
```

## Code Organization

### 1. Separation of Concerns

```javascript
// Bad: Everything in one file
app.get('/users', async (req, res) => {
  const users = await db.query('SELECT * FROM users');
  res.json(users);
});

// Good: Separated layers
// routes/users.js
router.get('/', userController.getUsers);

// controllers/userController.js
exports.getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

// services/userService.js
exports.getAllUsers = async () => {
  return await userModel.findAll();
};

// models/userModel.js
exports.findAll = async () => {
  return await db.query('SELECT * FROM users');
};
```

### 2. Environment Configuration

```javascript
// config/config.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h'
  }
};

// .env
PORT=3000
NODE_ENV=production
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=your-secret-key
```

## Error Handling

### 1. Centralized Error Handler

```javascript
// middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

// app.js
app.use(errorHandler);
```

### 2. Custom Error Classes

```javascript
// utils/errors.js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

class ValidationError extends AppError {
  constructor(message = 'Validation failed') {
    super(message, 400);
  }
}

module.exports = { AppError, NotFoundError, ValidationError };
```

### 3. Async Error Wrapper

```javascript
// utils/asyncHandler.js
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
app.get('/users', asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
}));
```

## Security

### 1. Essential Security Measures

```javascript
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// Security headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api', limiter);

// Data sanitization against NoSQL injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp());
```

### 2. Input Validation

```javascript
const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().min(2).max(50).required()
});

const validateRequest = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  req.validatedBody = value;
  next();
};

app.post('/api/users', validateRequest(userSchema), createUser);
```

### 3. Authentication & Authorization

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Hash password
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

// Verify password
const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

// Generate token
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Verify token middleware
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};
```

## Performance

### 1. Use Async/Await

```javascript
// Bad: Callback hell
getUserData(userId, (err, user) => {
  if (err) return handleError(err);
  getUserPosts(userId, (err, posts) => {
    if (err) return handleError(err);
    // ...
  });
});

// Good: Async/await
async function getUserData(userId) {
  try {
    const user = await User.findById(userId);
    const posts = await Post.find({ userId });
    return { user, posts };
  } catch (err) {
    throw err;
  }
}
```

### 2. Use Streams for Large Files

```javascript
// Bad: Load entire file
app.get('/download', (req, res) => {
  const data = fs.readFileSync('large-file.zip');
  res.send(data);
});

// Good: Stream file
app.get('/download', (req, res) => {
  const stream = fs.createReadStream('large-file.zip');
  stream.pipe(res);
});
```

### 3. Enable Compression

```javascript
const compression = require('compression');

app.use(compression());
```

### 4. Use Clustering

```javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart worker
  });
} else {
  require('./app');
  console.log(`Worker ${process.pid} started`);
}
```

### 5. Cache Frequently Accessed Data

```javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes

async function getUsers() {
  const cached = cache.get('users');

  if (cached) {
    return cached;
  }

  const users = await User.find();
  cache.set('users', users);

  return users;
}
```

## Logging

### 1. Use Winston for Logging

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Usage
logger.info('Server started');
logger.error('Error occurred', { error: err });
```

### 2. Log Request/Response

```javascript
const morgan = require('morgan');

// Development
app.use(morgan('dev'));

// Production (to file)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
);
app.use(morgan('combined', { stream: accessLogStream }));
```

## Testing

### 1. Unit Tests with Jest

```javascript
// services/userService.test.js
const userService = require('./userService');

describe('UserService', () => {
  describe('createUser', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com'
      };

      const user = await userService.createUser(userData);

      expect(user).toHaveProperty('id');
      expect(user.name).toBe(userData.name);
      expect(user.email).toBe(userData.email);
    });

    it('should throw error for invalid email', async () => {
      const userData = {
        name: 'John Doe',
        email: 'invalid-email'
      };

      await expect(userService.createUser(userData)).rejects.toThrow();
    });
  });
});
```

### 2. Integration Tests with Supertest

```javascript
const request = require('supertest');
const app = require('../app');

describe('Users API', () => {
  it('GET /api/users - should return all users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST /api/users - should create user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(201);

    expect(response.body).toHaveProperty('id');
  });
});
```

## Process Management

### 1. Graceful Shutdown

```javascript
// server.js
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');

  server.close(() => {
    console.log('Server closed');
    // Close database connections
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
```

### 2. Use PM2 for Production

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start server.js

# Start with clustering
pm2 start server.js -i max

# Configuration file
# ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-app',
    script: './server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production'
    }
  }]
};

# Start with config
pm2 start ecosystem.config.js
```

## Monitoring

```javascript
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Metrics endpoint
app.get('/metrics', (req, res) => {
  res.json({
    requests: requestCount,
    errors: errorCount,
    responseTime: averageResponseTime
  });
});
```

## Summary Checklist

✅ **Structure** - Organized, modular code
✅ **Security** - Helmet, rate limiting, validation, authentication
✅ **Error Handling** - Centralized, custom errors, async wrapper
✅ **Performance** - Async/await, streams, compression, caching, clustering
✅ **Logging** - Winston, Morgan, structured logs
✅ **Testing** - Unit tests, integration tests, >80% coverage
✅ **Environment** - .env files, config management
✅ **Process Management** - Graceful shutdown, PM2
✅ **Monitoring** - Health checks, metrics, logging
✅ **Documentation** - README, API docs, code comments

Following these practices will help you build robust, scalable, and maintainable Node.js applications!
