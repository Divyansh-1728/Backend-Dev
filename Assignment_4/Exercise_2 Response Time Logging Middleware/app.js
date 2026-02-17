const express = require('express');
const app = express();
const port = 3000;

// Middleware to log response time
const responseTimeLogger = (req, res, next) => {
  const start = Date.now(); // Capture start time

  // Listen for the 'finish' event on the response object
  res.on('finish', () => {
    const duration = Date.now() - start; // Calculate duration
    console.log(`${req.method} ${req.originalUrl} took ${duration}ms`);
  });

  next(); // Pass control to the next middleware/route handler
};

// Apply middleware globally
app.use(responseTimeLogger);

// Test Route (simulating a delay)
app.get('/', (req, res) => {
  // Simulate a 500ms delay to make the log interesting
  setTimeout(() => {
    res.send('Hello World!');
  }, 500);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});