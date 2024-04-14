import express from 'express';
import pool from './config/database';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
