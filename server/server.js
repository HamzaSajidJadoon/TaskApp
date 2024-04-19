// Import necessary modules
const express = require('express');
const cors = require('cors');
const {Pool} = require('pg');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Use cors middleware to enable CORS
app.use(cors());

// PostgreSQL database configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydatabase',
  password: '010203',
  port: 5432,
});

// Route for fetching all top showrooms
app.get('/api/topShowrooms', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM topShowrooms');
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching top showrooms:', error);
    res.status(500).json({message: 'Error fetching top showrooms'});
  }
});

//Below code is for getting numberPlate Data
app.get('/api/npData', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM npData');
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching npData:', error);
    res.status(500).json({message: 'Error fetching npData'});
  }
});

//Below code is for getting carData
app.get('/api/carData', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM carData');
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching carData:', error);
    res.status(500).json({message: 'Error fetching carData'});
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
