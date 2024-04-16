import { Request, Response } from 'express';
import EstoqueAlimentoService from '../services/EstoqueAlimentoService';

export default class EstoqueAlimentoController {

    static async getAll(req: Request, res: Response) {

        const foodStocks = await EstoqueAlimentoService.getAll();

        res.json(foodStocks);
    }

    static async getOne(req: Request, res: Response) {

        const { params: { id } } = req;

        const foodStock = await EstoqueAlimentoService.getOne(parseInt(id));

        if (foodStock) {

            res.json(foodStock);
        } else {

            res.status(404).send('Estoque de alimentos não encontrado');
        }
    }

    static async create(req: Request, res: Response) {

        const foodStock = await EstoqueAlimentoService.create(req.body);

        res.status(201).json(foodStock);
    }

    static async update(req: Request, res: Response) {

        const { params: { id }, body } = req;

        const foodStock = await EstoqueAlimentoService.update(parseInt(id), body);

        res.json(foodStock);
    }

    static async delete(req: Request, res: Response) {

        const { params: { id } } = req;

        await EstoqueAlimentoService.delete(parseInt(id));

        res.status(204).send();
    }
}
