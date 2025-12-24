const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// API to get all feedback
app.get('/feedback', async (req, res) => {
  const result = await pool.query('SELECT * FROM feedback ORDER BY id DESC');
  res.json(result.rows);
});

// API to submit feedback
app.post('/feedback', async (req, res) => {
  const { name, message } = req.body;
  await pool.query('INSERT INTO feedback(name, message) VALUES($1, $2)', [name, message]);
  res.json({ status: 'success' });
});

app.listen(3000, () => console.log('Backend running on port 3000'));
