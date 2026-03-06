import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'learndb',
  password: process.env.DB_PASSWORD || 'postgres',
  port: parseInt(process.env.DB_PORT || '5432'),
});

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    res.json({ 
      message: 'OLA', 
      db_time: result.rows[0].now 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao conectar com o banco de dados' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
