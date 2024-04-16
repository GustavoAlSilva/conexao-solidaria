import pool from '../config/database';
import { DoacaoAlimentoCreateType, DoacaoAlimentoUpdateType } from '../types/doacaoAlimentoTypes';

export default class DoacaoAlimentoRepository {

    static async getAll() {

        const res = await pool.query('SELECT * FROM doacao_alimento');

        return res.rows;
    }

    static async getOne(id: number) {

        const res = await pool.query('SELECT * FROM doacao_alimento WHERE id = $1', [id]);

        return res.rows[0];
    }

    static async create(data: DoacaoAlimentoCreateType) {

        const res = await pool.query(
            `INSERT INTO doacao_alimento (id_solicitante, id_alimento, peso, id_condutor, id_estoque_alimento)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [
                data.id_solicitante,
                data.id_alimento,
                data.peso,
                data.id_condutor,
                data.id_estoque_alimento
            ]
        );

        return res.rows[0];
    }

    static async update(id: number, data: DoacaoAlimentoUpdateType) {

        const res = await pool.query(
            `UPDATE doacao_alimento
            SET id_solicitante = $1,
                id_alimento = $2,
                peso = $3,
                id_condutor = $4,
                id_estoque_alimento = $5
            WHERE id = $6 RETURNING *`,
            [
                data.id_solicitante,
                data.id_alimento,
                data.peso,
                data.id_condutor,
                data.id_estoque_alimento,
                id
            ]
        );

        return res.rows[0];
    }

    static async delete(id: number) {

        await pool.query('DELETE FROM doacao_alimento WHERE id = $1', [id]);
    }
}
