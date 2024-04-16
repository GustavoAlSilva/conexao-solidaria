import { Request, Response } from 'express';
import DepositoService from '../services/DepositoService';

export default class DepositoController {

    static async getAll(req: Request, res: Response) {

        const deposits = await DepositoService.getAll();

        res.json(deposits);
    }

    static async getOne(req: Request, res: Response) {

        const { params: { id } } = req;

        const deposit = await DepositoService.getOne(parseInt(id));

        if (deposit) {

            res.json(deposit);
        } else {

            res.status(404).send('Deposito não encontrado');
        }
    }

    static async create(req: Request, res: Response) {

        const deposit = await DepositoService.create(req.body);

        res.status(201).json(deposit);
    }

    static async update(req: Request, res: Response) {

        const { params: { id }, body } = req;

        const deposit = await DepositoService.update(parseInt(id), body);

        res.json(deposit);
    }

    static async delete(req: Request, res: Response) {

        const { params: { id } } = req;

        await DepositoService.delete(parseInt(id));

        res.status(204).send();
    }
}
