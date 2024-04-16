import { Request, Response } from 'express';
import AlimentoService from '../services/AlimentoService';

export default class AlimentoController {

    static async getAll(req: Request, res: Response) {

        const foods = await AlimentoService.getAll();

        res.json(foods);
    }

    static async getOne(req: Request, res: Response) {

        const { params: { id } } = req;

        const food = await AlimentoService.getOne(parseInt(id));

        if (food) {

            res.json(food);
        } else {

            res.status(404).send('Alimento não encontrado');
        }
    }

    static async create(req: Request, res: Response) {

        const food = await AlimentoService.create(req.body);

        res.status(201).json(food);
    }

    static async update(req: Request, res: Response) {

        const { params: { id }, body } = req;

        const food = await AlimentoService.update(parseInt(id), body);

        res.json(food);
    }

    static async delete(req: Request, res: Response) {

        const { params: { id } } = req;

        await AlimentoService.delete(parseInt(id));

        res.status(204).send();
    }
}
