// // Empty export to define local scope for this module and avoid app naming conflicts 
// export{}

const expressApp = require('express');
const path = require('path');
const cors = require('cors')

//require routes 
const appointmentRoutes = require('./routes/appointmentRoutes.ts');

const app = expressApp();

// Enable CORS
app.use(cors());

// Serve static files from React build output
app.use(expressApp.static(path.join(__dirname, '../dist')));

// Mount Routes
app.use('/api/appointments', appointmentRoutes)

// Serve React app's HTML file for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
