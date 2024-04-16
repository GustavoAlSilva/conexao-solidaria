import pool from '../config/database';
import { DepositoCreateType, DepositoUpdateType } from '../types/depositoTypes';

export default class DepositoRepository {

    static async getAll() {

        const res = await pool.query('SELECT * FROM deposito');

        return res.rows;
    }

    static async getOne(id: number) {

        const res = await pool.query('SELECT * FROM deposito WHERE id = $1', [id]);

        return res.rows[0];
    }

    static async create(data: DepositoCreateType) {

        const res = await pool.query(
            'INSERT INTO deposito (nome, id_pessoa) VALUES ($1, $2) RETURNING *',
            [data.nome, data.id_pessoa]
        );

        return res.rows[0];
    }

    static async update(id: number, data: DepositoUpdateType) {

        const res = await pool.query(
            'UPDATE deposito SET nome = $1, id_pessoa = $2 WHERE id = $3 RETURNING *',
            [data.nome, data.id_pessoa, id]
        );

        return res.rows[0];
    }

    static async delete(id: number) {

        await pool.query('DELETE FROM deposito WHERE id = $1', [id]);
    }
}
