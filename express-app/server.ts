const express = require('express');
const path = require('path');

const app = express();

// Serve static files from React build output
app.use(express.static(path.join(__dirname, '../dist')));

// Define API routes
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the server!',
  };
  res.json(data);
});

// Serve React app's HTML file for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
