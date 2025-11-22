# File System Operations in Node.js

The `fs` module provides comprehensive file system operations. This guide covers reading, writing, and managing files and directories.

## File System APIs

Node.js provides three ways to work with the file system:

1. **Callback API** - Traditional async with callbacks
2. **Synchronous API** - Blocking operations (ends with `Sync`)
3. **Promise API** - Modern async with promises (`fs.promises`)

```javascript
const fs = require('fs');
const fsSync = require('fs'); // Same module
const fsPromises = require('fs').promises;
```

## Reading Files

### Read Entire File

```javascript
// Callback API
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Content:', data);
});

// Synchronous (blocks event loop - avoid in production)
try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('Content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}

// Promise API (recommended)
async function readFile() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log('Content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFile();
```

### Reading Binary Files

```javascript
// Read without encoding to get Buffer
const buffer = await fsPromises.readFile('image.png');
console.log('Buffer:', buffer);
console.log('Size:', buffer.length, 'bytes');

// Convert buffer to base64
const base64 = buffer.toString('base64');
console.log('Base64:', base64);
```

### Reading JSON Files

```javascript
async function readJSON(filepath) {
  try {
    const data = await fsPromises.readFile(filepath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('File not found');
    } else if (err instanceof SyntaxError) {
      console.error('Invalid JSON');
    } else {
      console.error('Error:', err);
    }
    throw err;
  }
}

const config = await readJSON('config.json');
console.log(config);
```

### Reading Large Files (Streams)

```javascript
const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64 KB chunks
});

readStream.on('data', (chunk) => {
  console.log('Chunk size:', chunk.length);
  console.log('Chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

readStream.on('error', (err) => {
  console.error('Error:', err);
});
```

## Writing Files

### Write Entire File

```javascript
// Callback API
fs.writeFile('output.txt', 'Hello World!', 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});

// Promise API
async function writeFile() {
  try {
    await fsPromises.writeFile('output.txt', 'Hello World!', 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

// Write with options
await fsPromises.writeFile('output.txt', 'Content', {
  encoding: 'utf8',
  mode: 0o666,
  flag: 'w' // w = write, a = append, r+ = read/write
});
```

### Append to File

```javascript
// Append to existing file (creates if doesn't exist)
await fsPromises.appendFile('log.txt', 'New log entry\n', 'utf8');

// Multiple appends
const logs = ['Log 1', 'Log 2', 'Log 3'];
for (const log of logs) {
  await fsPromises.appendFile('log.txt', log + '\n');
}
```

### Writing JSON Files

```javascript
async function writeJSON(filepath, data) {
  try {
    const json = JSON.stringify(data, null, 2); // Pretty print
    await fsPromises.writeFile(filepath, json, 'utf8');
    console.log('JSON file written');
  } catch (err) {
    console.error('Error writing JSON:', err);
    throw err;
  }
}

const data = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};

await writeJSON('user.json', data);
```

### Writing Large Files (Streams)

```javascript
const writeStream = fs.createWriteStream('output.txt', {
  encoding: 'utf8'
});

// Write data in chunks
for (let i = 0; i < 1000; i++) {
  writeStream.write(`Line ${i}\n`);
}

// End the stream
writeStream.end();

writeStream.on('finish', () => {
  console.log('Finished writing');
});

writeStream.on('error', (err) => {
  console.error('Error:', err);
});
```

## File Operations

### Check if File Exists

```javascript
// Using fs.access
async function fileExists(filepath) {
  try {
    await fsPromises.access(filepath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

console.log(await fileExists('file.txt')); // true or false

// Check if readable
await fsPromises.access('file.txt', fs.constants.R_OK);

// Check if writable
await fsPromises.access('file.txt', fs.constants.W_OK);
```

### Get File Statistics

```javascript
const stats = await fsPromises.stat('file.txt');

console.log('Is file:', stats.isFile());
console.log('Is directory:', stats.isDirectory());
console.log('Is symbolic link:', stats.isSymbolicLink());
console.log('File size:', stats.size, 'bytes');
console.log('Created:', stats.birthtime);
console.log('Modified:', stats.mtime);
console.log('Accessed:', stats.atime);
console.log('Changed:', stats.ctime);
console.log('Mode:', stats.mode.toString(8));

// Human-readable file size
function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}

console.log('Size:', formatFileSize(stats.size));
```

### Copy Files

```javascript
// Simple copy
await fsPromises.copyFile('source.txt', 'destination.txt');

// Copy with flag (fail if destination exists)
await fsPromises.copyFile('source.txt', 'dest.txt', fs.constants.COPYFILE_EXCL);

// Copy function with error handling
async function copyFile(src, dest) {
  try {
    await fsPromises.copyFile(src, dest);
    console.log(`Copied ${src} to ${dest}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Source file not found');
    } else if (err.code === 'EEXIST') {
      console.error('Destination file already exists');
    } else {
      console.error('Error:', err);
    }
    throw err;
  }
}
```

### Rename/Move Files

```javascript
// Rename file
await fsPromises.rename('old-name.txt', 'new-name.txt');

// Move file to different directory
await fsPromises.rename('file.txt', './backups/file.txt');

// Move with error handling
async function moveFile(src, dest) {
  try {
    await fsPromises.rename(src, dest);
    console.log(`Moved ${src} to ${dest}`);
  } catch (err) {
    if (err.code === 'EXDEV') {
      // Cross-device move not supported, use copy + delete
      await fsPromises.copyFile(src, dest);
      await fsPromises.unlink(src);
    } else {
      throw err;
    }
  }
}
```

### Delete Files

```javascript
// Delete file
await fsPromises.unlink('file.txt');

// Safe delete (check if exists first)
async function deleteFile(filepath) {
  try {
    await fsPromises.unlink(filepath);
    console.log('File deleted:', filepath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist');
    } else {
      throw err;
    }
  }
}

await deleteFile('file.txt');
```

### Truncate Files

```javascript
// Truncate to 0 bytes (empty the file)
await fsPromises.truncate('file.txt', 0);

// Truncate to specific size
await fsPromises.truncate('file.txt', 100); // Keep first 100 bytes
```

### Change File Permissions

```javascript
// Change permissions (chmod)
await fsPromises.chmod('file.txt', 0o644); // rw-r--r--
await fsPromises.chmod('script.sh', 0o755); // rwxr-xr-x

// Change ownership (chown)
await fsPromises.chown('file.txt', uid, gid);
```

## Directory Operations

### Create Directories

```javascript
// Create single directory
await fsPromises.mkdir('new-folder');

// Create nested directories
await fsPromises.mkdir('path/to/nested/folder', { recursive: true });

// Create with specific permissions
await fsPromises.mkdir('secure-folder', { mode: 0o700 });

// Safe create (don't fail if exists)
async function ensureDir(dirpath) {
  try {
    await fsPromises.mkdir(dirpath, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}
```

### Read Directories

```javascript
// List files
const files = await fsPromises.readdir('./');
console.log('Files:', files);

// List with file types
const entries = await fsPromises.readdir('./', { withFileTypes: true });

entries.forEach(entry => {
  const type = entry.isDirectory() ? 'DIR ' : 'FILE';
  console.log(`[${type}] ${entry.name}`);
});

// Filter files by extension
const jsFiles = entries
  .filter(entry => entry.isFile() && entry.name.endsWith('.js'))
  .map(entry => entry.name);

console.log('JavaScript files:', jsFiles);
```

### Recursive Directory Listing

```javascript
const path = require('path');

async function* walk(dir) {
  const entries = await fsPromises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else {
      yield fullPath;
    }
  }
}

// Usage
for await (const filepath of walk('./src')) {
  console.log(filepath);
}

// Get all files as array
async function getAllFiles(dir) {
  const files = [];
  for await (const filepath of walk(dir)) {
    files.push(filepath);
  }
  return files;
}

const allFiles = await getAllFiles('./src');
console.log('Total files:', allFiles.length);
```

### Delete Directories

```javascript
// Delete empty directory
await fsPromises.rmdir('empty-folder');

// Delete directory and contents (recursive)
await fsPromises.rm('folder', { recursive: true, force: true });

// Safe recursive delete
async function deleteDir(dirpath) {
  try {
    await fsPromises.rm(dirpath, { recursive: true, force: true });
    console.log('Directory deleted:', dirpath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Directory does not exist');
    } else {
      throw err;
    }
  }
}
```

## Watching Files and Directories

### Watch for Changes

```javascript
// Watch file
const watcher = fs.watch('file.txt', (eventType, filename) => {
  console.log(`Event: ${eventType}`);
  if (filename) {
    console.log(`Filename: ${filename}`);
  }
});

// Watch directory
const dirWatcher = fs.watch('./src', { recursive: true }, (eventType, filename) => {
  console.log(`${filename} was ${eventType}`);
});

// Stop watching
// watcher.close();

// Watch with watchFile (polling-based)
fs.watchFile('file.txt', { interval: 1000 }, (curr, prev) => {
  console.log('File modified');
  console.log('Current mtime:', curr.mtime);
  console.log('Previous mtime:', prev.mtime);
});

// Stop watching
// fs.unwatchFile('file.txt');
```

### Advanced File Watcher

```javascript
const chokidar = require('chokidar'); // npm install chokidar

const watcher = chokidar.watch('./src', {
  ignored: /(^|[\/\\])\../, // Ignore dotfiles
  persistent: true,
  ignoreInitial: true
});

watcher
  .on('add', path => console.log(`File added: ${path}`))
  .on('change', path => console.log(`File changed: ${path}`))
  .on('unlink', path => console.log(`File removed: ${path}`))
  .on('addDir', path => console.log(`Directory added: ${path}`))
  .on('unlinkDir', path => console.log(`Directory removed: ${path}`))
  .on('error', error => console.error(`Watcher error: ${error}`))
  .on('ready', () => console.log('Initial scan complete'));

// Stop watching
// watcher.close();
```

## File Streams

### Read Stream

```javascript
const readStream = fs.createReadStream('large-file.txt', {
  encoding: 'utf8',
  highWaterMark: 16 * 1024 // 16 KB chunks
});

let data = '';

readStream.on('data', (chunk) => {
  data += chunk;
});

readStream.on('end', () => {
  console.log('Total size:', data.length);
});

readStream.on('error', (err) => {
  console.error('Error:', err);
});

// Pause and resume
readStream.pause();
setTimeout(() => readStream.resume(), 1000);
```

### Write Stream

```javascript
const writeStream = fs.createWriteStream('output.txt');

// Write data
for (let i = 0; i < 1000000; i++) {
  const canContinue = writeStream.write(`Line ${i}\n`);

  if (!canContinue) {
    // Wait for drain event
    await new Promise(resolve => writeStream.once('drain', resolve));
  }
}

writeStream.end();

await new Promise((resolve, reject) => {
  writeStream.on('finish', resolve);
  writeStream.on('error', reject);
});
```

### Pipe Streams

```javascript
// Copy file using streams
const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('destination.txt');

readStream.pipe(writeStream);

// With error handling
readStream.on('error', err => console.error('Read error:', err));
writeStream.on('error', err => console.error('Write error:', err));
writeStream.on('finish', () => console.log('Copy complete'));

// Pipeline (better error handling)
const { pipeline } = require('stream');
const { promisify } = require('util');
const pipelineAsync = promisify(pipeline);

try {
  await pipelineAsync(
    fs.createReadStream('source.txt'),
    fs.createWriteStream('destination.txt')
  );
  console.log('Pipeline succeeded');
} catch (err) {
  console.error('Pipeline failed:', err);
}
```

## Practical Examples

### Copy Directory Recursively

```javascript
const path = require('path');

async function copyDir(src, dest) {
  await fsPromises.mkdir(dest, { recursive: true });

  const entries = await fsPromises.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fsPromises.copyFile(srcPath, destPath);
    }
  }
}

await copyDir('./source', './destination');
```

### Find Files by Pattern

```javascript
const path = require('path');

async function findFiles(dir, pattern) {
  const results = [];

  async function search(currentDir) {
    const entries = await fsPromises.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        await search(fullPath);
      } else if (pattern.test(entry.name)) {
        results.push(fullPath);
      }
    }
  }

  await search(dir);
  return results;
}

// Find all JavaScript files
const jsFiles = await findFiles('./src', /\.js$/);
console.log('JavaScript files:', jsFiles);

// Find all test files
const testFiles = await findFiles('./tests', /\.test\.js$/);
console.log('Test files:', testFiles);
```

### Calculate Directory Size

```javascript
async function getDirectorySize(dir) {
  let size = 0;

  const entries = await fsPromises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      size += await getDirectorySize(fullPath);
    } else {
      const stats = await fsPromises.stat(fullPath);
      size += stats.size;
    }
  }

  return size;
}

const size = await getDirectorySize('./src');
console.log('Directory size:', formatFileSize(size));
```

### Clean Old Files

```javascript
async function cleanOldFiles(dir, daysOld) {
  const now = Date.now();
  const maxAge = daysOld * 24 * 60 * 60 * 1000;

  const entries = await fsPromises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isFile()) {
      const stats = await fsPromises.stat(fullPath);
      const age = now - stats.mtime.getTime();

      if (age > maxAge) {
        await fsPromises.unlink(fullPath);
        console.log('Deleted:', fullPath);
      }
    }
  }
}

// Delete files older than 30 days
await cleanOldFiles('./logs', 30);
```

## Best Practices

1. **Use Promises/Async-Await** - Cleaner than callbacks
2. **Use Streams for Large Files** - Don't load entire file in memory
3. **Handle Errors Properly** - Always catch and handle errors
4. **Check File Existence** - Before operations
5. **Use Path Module** - For cross-platform path handling
6. **Close File Descriptors** - When using `fs.open`
7. **Avoid Sync Operations** - In production code
8. **Use `fs.promises` API** - Modern and clean

## Common Error Codes

- `ENOENT` - No such file or directory
- `EEXIST` - File already exists
- `EACCES` - Permission denied
- `EISDIR` - Is a directory
- `ENOTDIR` - Not a directory
- `EMFILE` - Too many open files

## Summary

- Use **`fs.promises`** for modern async operations
- Use **streams** for large files
- Always **handle errors** properly
- Use **path module** for cross-platform paths
- **Watch files** for real-time monitoring
- **Recursive operations** require careful implementation

The file system module is essential for working with files and directories in Node.js!
