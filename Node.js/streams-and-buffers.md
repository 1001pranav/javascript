# Streams and Buffers in Node.js

Streams and buffers are fundamental concepts in Node.js for handling data efficiently.

## Buffers

Buffers are used to handle binary data in Node.js. They represent fixed-size chunks of memory allocated outside the V8 heap.

### Creating Buffers

```javascript
// From string
const buf1 = Buffer.from('Hello World');
const buf2 = Buffer.from('Hello', 'utf8');

// From array
const buf3 = Buffer.from([72, 101, 108, 108, 111]); // Hello

// Allocate empty buffer
const buf4 = Buffer.alloc(10); // 10 bytes, filled with zeros
const buf5 = Buffer.allocUnsafe(10); // Faster, but contains old data

// From hex
const buf6 = Buffer.from('48656c6c6f', 'hex');

// From base64
const buf7 = Buffer.from('SGVsbG8=', 'base64');
```

### Reading Buffers

```javascript
const buf = Buffer.from('Hello World');

console.log(buf.toString());          // 'Hello World'
console.log(buf.toString('hex'));     // '48656c6c6f20576f726c64'
console.log(buf.toString('base64'));  // 'SGVsbG8gV29ybGQ='

// Access individual bytes
console.log(buf[0]);                  // 72 (ASCII code for 'H')
console.log(buf.length);              // 11

// Convert to array
console.log([...buf]);                // [72, 101, 108, 108, 111, ...]
console.log(buf.toJSON());            // { type: 'Buffer', data: [...] }
```

### Writing to Buffers

```javascript
const buf = Buffer.alloc(10);

// Write string
buf.write('Hello');
console.log(buf.toString());          // 'Hello'

// Write at offset
buf.write('World', 5);
console.log(buf.toString());          // 'HelloWorld'

// Fill buffer
const buf2 = Buffer.alloc(10);
buf2.fill('a');
console.log(buf2.toString());         // 'aaaaaaaaaa'

// Fill with byte value
buf2.fill(0);
console.log(buf2);                    // <Buffer 00 00 00 00 00 00 00 00 00 00>
```

### Buffer Methods

```javascript
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.from(' World');

// Concatenate
const buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());         // 'Hello World'

// Compare
console.log(buf1.compare(buf2));      // -1 (buf1 < buf2)
console.log(buf1.equals(buf1));       // true

// Copy
const buf4 = Buffer.alloc(5);
buf1.copy(buf4);
console.log(buf4.toString());         // 'Hello'

// Slice (creates view, not copy)
const buf5 = buf1.slice(0, 2);
console.log(buf5.toString());         // 'He'

// Includes
console.log(buf1.includes('ll'));     // true
console.log(buf1.indexOf('ll'));      // 2
console.log(buf1.lastIndexOf('l'));   // 3
```

### Working with Binary Data

```javascript
// Write numbers
const buf = Buffer.alloc(8);

buf.writeInt8(127, 0);                // Write signed 8-bit integer
buf.writeUInt8(255, 1);               // Write unsigned 8-bit integer
buf.writeInt16BE(32767, 2);           // Write 16-bit integer (big-endian)
buf.writeInt32LE(-2147483648, 4);     // Write 32-bit integer (little-endian)

// Read numbers
const num1 = buf.readInt8(0);         // 127
const num2 = buf.readUInt8(1);        // 255
const num3 = buf.readInt16BE(2);      // 32767
const num4 = buf.readInt32LE(4);      // -2147483648

// Floating point
const floatBuf = Buffer.alloc(8);
floatBuf.writeFloatBE(3.14, 0);
floatBuf.writeDoubleBE(3.141592653589793, 4);

console.log(floatBuf.readFloatBE(0)); // 3.14
console.log(floatBuf.readDoubleBE(4)); // 3.141592653589793
```

## Streams

Streams are collections of data that might not be available all at once. They allow you to process data piece by piece without loading the entire dataset into memory.

### Types of Streams

1. **Readable** - Read data from a source
2. **Writable** - Write data to a destination
3. **Duplex** - Both readable and writable
4. **Transform** - Duplex stream that transforms data

### Readable Streams

```javascript
const fs = require('fs');

// Create readable stream
const readStream = fs.createReadStream('large-file.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64 KB chunks (default: 16 KB)
});

// Event: 'data' - emitted when chunk is available
readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length, 'bytes');
  console.log(chunk);
});

// Event: 'end' - emitted when no more data
readStream.on('end', () => {
  console.log('Finished reading file');
});

// Event: 'error' - emitted on error
readStream.on('error', (err) => {
  console.error('Error:', err);
});

// Event: 'open' - emitted when file is opened
readStream.on('open', (fd) => {
  console.log('File opened, descriptor:', fd);
});

// Event: 'close' - emitted when stream closed
readStream.on('close', () => {
  console.log('Stream closed');
});
```

### Controlling Flow

```javascript
const readStream = fs.createReadStream('file.txt');

// Pause stream
readStream.pause();
console.log('Stream paused');

// Resume stream
setTimeout(() => {
  readStream.resume();
  console.log('Stream resumed');
}, 1000);

// Check if readable
console.log('Is readable:', readStream.readable);

// Check if paused
console.log('Is paused:', readStream.isPaused());
```

### Readable Stream in Flowing Mode

```javascript
const { Readable } = require('stream');

// Create custom readable stream
class CounterStream extends Readable {
  constructor(max, options) {
    super(options);
    this.max = max;
    this.current = 1;
  }

  _read() {
    if (this.current <= this.max) {
      this.push(`${this.current}\n`);
      this.current++;
    } else {
      this.push(null); // Signal end of stream
    }
  }
}

const counter = new CounterStream(5);

counter.on('data', (chunk) => {
  console.log('Count:', chunk.toString().trim());
});

counter.on('end', () => {
  console.log('Counting complete');
});
```

### Writable Streams

```javascript
const writeStream = fs.createWriteStream('output.txt');

// Write data
writeStream.write('Line 1\n');
writeStream.write('Line 2\n');
writeStream.write('Line 3\n');

// End stream
writeStream.end('Final line\n');

// Events
writeStream.on('finish', () => {
  console.log('All writes completed');
});

writeStream.on('error', (err) => {
  console.error('Write error:', err);
});

// Back-pressure handling
function writeMillionLines(writer, encoding, callback) {
  let i = 1000000;

  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // Last write
        writer.write(`Line ${i}\n`, encoding, callback);
      } else {
        // Check if we should continue writing
        ok = writer.write(`Line ${i}\n`, encoding);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      // Had to stop early - back-pressure
      writer.once('drain', write);
    }
  }

  write();
}

writeMillionLines(writeStream, 'utf8', () => {
  console.log('All million lines written');
});
```

### Custom Writable Stream

```javascript
const { Writable } = require('stream');

class ConsoleStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log('Writing:', chunk.toString());
    callback(); // Signal completion
  }

  _writev(chunks, callback) {
    // Write multiple chunks at once
    chunks.forEach(chunk => {
      console.log('Batch write:', chunk.chunk.toString());
    });
    callback();
  }

  _final(callback) {
    console.log('Stream ending');
    callback();
  }
}

const consoleStream = new ConsoleStream();

consoleStream.write('Hello\n');
consoleStream.write('World\n');
consoleStream.end();
```

### Piping Streams

Piping connects a readable stream to a writable stream.

```javascript
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

// Pipe (automatic back-pressure handling)
readStream.pipe(writeStream);

// Events still available
writeStream.on('finish', () => {
  console.log('Copy complete');
});

// Chain pipes
const zlib = require('zlib');
const gzip = zlib.createGzip();

fs.createReadStream('input.txt')
  .pipe(gzip)
  .pipe(fs.createWriteStream('input.txt.gz'));

// Handle errors in pipe chain
readStream
  .on('error', err => console.error('Read error:', err))
  .pipe(gzip)
  .on('error', err => console.error('Gzip error:', err))
  .pipe(writeStream)
  .on('error', err => console.error('Write error:', err))
  .on('finish', () => console.log('Done'));
```

### Pipeline (Better Error Handling)

```javascript
const { pipeline } = require('stream');
const { promisify } = require('util');
const pipelineAsync = promisify(pipeline);

// Callback version
pipeline(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('output.txt.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('Pipeline succeeded');
    }
  }
);

// Promise version
async function compressFile() {
  try {
    await pipelineAsync(
      fs.createReadStream('input.txt'),
      zlib.createGzip(),
      fs.createWriteStream('output.txt.gz')
    );
    console.log('Compression complete');
  } catch (err) {
    console.error('Compression failed:', err);
  }
}

compressFile();
```

### Duplex Streams

Duplex streams are both readable and writable.

```javascript
const { Duplex } = require('stream');

class EchoStream extends Duplex {
  constructor(options) {
    super(options);
    this.data = [];
  }

  _write(chunk, encoding, callback) {
    this.data.push(chunk);
    callback();
  }

  _read(size) {
    if (this.data.length > 0) {
      this.push(this.data.shift());
    } else {
      this.push(null);
    }
  }
}

const echo = new EchoStream();

echo.write('Hello\n');
echo.write('World\n');
echo.end();

echo.on('data', (chunk) => {
  console.log('Echo:', chunk.toString());
});
```

### Transform Streams

Transform streams modify data as it passes through.

```javascript
const { Transform } = require('stream');

// Uppercase transform
class UppercaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

const uppercase = new UppercaseTransform();

process.stdin
  .pipe(uppercase)
  .pipe(process.stdout);

// CSV to JSON transform
class CSVToJSON extends Transform {
  constructor(options) {
    super({ ...options, objectMode: true });
    this.headers = null;
  }

  _transform(chunk, encoding, callback) {
    const lines = chunk.toString().split('\n');

    lines.forEach(line => {
      if (!line) return;

      if (!this.headers) {
        this.headers = line.split(',');
      } else {
        const values = line.split(',');
        const obj = {};

        this.headers.forEach((header, i) => {
          obj[header] = values[i];
        });

        this.push(JSON.stringify(obj) + '\n');
      }
    });

    callback();
  }
}

const csvToJson = new CSVToJSON();

fs.createReadStream('data.csv')
  .pipe(csvToJson)
  .pipe(fs.createWriteStream('data.json'));
```

### Object Mode Streams

Streams can work with objects instead of strings/buffers.

```javascript
const { Transform } = require('stream');

class ObjectTransform extends Transform {
  constructor(options) {
    super({ ...options, objectMode: true });
  }

  _transform(obj, encoding, callback) {
    // Modify object
    obj.processed = true;
    obj.timestamp = Date.now();

    this.push(obj);
    callback();
  }
}

// Create readable object stream
const { Readable } = require('stream');

const objectStream = Readable.from([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
], { objectMode: true });

const transform = new ObjectTransform();

objectStream
  .pipe(transform)
  .on('data', (obj) => {
    console.log('Processed:', obj);
  });
```

## Practical Examples

### Copy File with Progress

```javascript
const fs = require('fs');

function copyFileWithProgress(source, destination) {
  return new Promise((resolve, reject) => {
    const stat = fs.statSync(source);
    const totalSize = stat.size;
    let copiedSize = 0;

    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(destination);

    readStream.on('data', (chunk) => {
      copiedSize += chunk.length;
      const percent = ((copiedSize / totalSize) * 100).toFixed(2);
      process.stdout.write(`\rCopying: ${percent}%`);
    });

    writeStream.on('finish', () => {
      console.log('\nCopy complete');
      resolve();
    });

    readStream.on('error', reject);
    writeStream.on('error', reject);

    readStream.pipe(writeStream);
  });
}

copyFileWithProgress('large-file.zip', 'copy.zip');
```

### Stream HTTP Response

```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/download') {
    const filepath = 'large-file.zip';

    // Get file size for Content-Length header
    const stat = fs.statSync(filepath);

    res.writeHead(200, {
      'Content-Type': 'application/zip',
      'Content-Length': stat.size,
      'Content-Disposition': 'attachment; filename=large-file.zip'
    });

    // Stream file to response
    const readStream = fs.createReadStream(filepath);
    readStream.pipe(res);

    readStream.on('error', (err) => {
      res.writeHead(500);
      res.end('Error reading file');
    });
  }
});

server.listen(3000);
```

### Process Large CSV File

```javascript
const fs = require('fs');
const readline = require('readline');

async function processLargeCSV(filepath) {
  const fileStream = fs.createReadStream(filepath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lineCount = 0;
  let headers = null;

  for await (const line of rl) {
    if (lineCount === 0) {
      headers = line.split(',');
    } else {
      const values = line.split(',');
      const row = {};

      headers.forEach((header, i) => {
        row[header] = values[i];
      });

      // Process row
      console.log('Row:', row);
    }

    lineCount++;
  }

  console.log(`Processed ${lineCount} lines`);
}

processLargeCSV('large-data.csv');
```

### Compress Multiple Files

```javascript
const { pipeline } = require('stream');
const zlib = require('zlib');
const tar = require('tar-stream');

async function compressFiles(files, outputFile) {
  const pack = tar.pack();

  // Add files to tar
  files.forEach(file => {
    pack.entry({ name: file }, fs.readFileSync(file));
  });

  pack.finalize();

  // Compress tar
  await pipelineAsync(
    pack,
    zlib.createGzip(),
    fs.createWriteStream(outputFile)
  );

  console.log('Compression complete');
}

compressFiles(['file1.txt', 'file2.txt'], 'archive.tar.gz');
```

## Performance Considerations

### Memory Usage

```javascript
// Bad: Loads entire file in memory
fs.readFile('huge-file.txt', (err, data) => {
  // Memory spike!
  res.send(data);
});

// Good: Streams data in chunks
const stream = fs.createReadStream('huge-file.txt');
stream.pipe(res);
```

### Back-Pressure

```javascript
// Handle back-pressure properly
function writeData(writer, data) {
  return new Promise((resolve, reject) => {
    if (!writer.write(data)) {
      // Buffer is full, wait for drain
      writer.once('drain', resolve);
      writer.once('error', reject);
    } else {
      // Can continue writing
      process.nextTick(resolve);
    }
  });
}

async function processData() {
  const writer = fs.createWriteStream('output.txt');

  for (let i = 0; i < 1000000; i++) {
    await writeData(writer, `Line ${i}\n`);
  }

  writer.end();
}
```

## Best Practices

1. **Use streams for large files** - Don't load everything in memory
2. **Handle errors** - Listen to error events
3. **Use pipeline** - Better error handling than manual piping
4. **Respect back-pressure** - Don't overwhelm writable streams
5. **Clean up** - Close streams when done
6. **Use object mode** - When working with structured data
7. **Consider buffering** - For small files, simple read/write is fine
8. **Monitor memory** - Streams should keep memory usage low

## Summary

- **Buffers** - Handle binary data efficiently
- **Streams** - Process data piece by piece
  - **Readable** - Read from source
  - **Writable** - Write to destination
  - **Duplex** - Both read and write
  - **Transform** - Modify data in transit
- **Piping** - Connect streams together
- **Pipeline** - Safer than manual piping
- **Use streams** - For large files and real-time data

Streams and buffers are essential for building efficient, scalable Node.js applications!
