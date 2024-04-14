import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'conexao_solidaria',
  password: 'postgres',
  port: 5432,
});

pool.on('connect', () => {
    console.log('Conectado ao banco de dados PostgreSQL!');
});

export default pool;
