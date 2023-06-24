const express = require('express');
const router = express.Router();
// Define API routes for appointments

// /api/appointments
router.get('/', (req, res) => {
  const data = {
    message: 'Hello from the server!',
  };
  res.json(data);
});

module.exports = router;