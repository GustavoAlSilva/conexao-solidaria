import pool from '../config/database';
import { SolicitanteCreateType, SolicitanteUpdateType } from '../types/solicitanteTypes';

export default class SolicitanteRepository {

    static async getAll() {

        const res = await pool.query('SELECT * FROM solicitante');

        return res.rows;
    }

    static async getOne(id: number) {

        const res = await pool.query('SELECT * FROM solicitante WHERE id = $1', [id]);

        return res.rows[0];
    }

    static async create(data: SolicitanteCreateType) {

        const res = await pool.query(
            'INSERT INTO solicitante (id, quantidade_dependentes) VALUES ($1, $2) RETURNING *',
            [data.id, data.quantidade_dependentes]
        );

        return res.rows[0];
    }

    static async update(id: number, data: SolicitanteUpdateType) {

        const res = await pool.query(
            'UPDATE solicitante SET quantidade_dependentes = $1 WHERE id = $2 RETURNING *',
            [data.quantidade_dependentes, id]
        );

        return res.rows[0];
    }

    static async delete(id: number) {

        await pool.query('DELETE FROM solicitante WHERE id = $1', [id]);
    }
}
