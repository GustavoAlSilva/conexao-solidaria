import { Request, Response } from 'express';
import ArrecadacaoAlimentoService from '../services/ArrecadacaoAlimentoService';

export default class ArrecadacaoAlimentoController {

    static async getAll(req: Request, res: Response) {

        const foodCollections = await ArrecadacaoAlimentoService.getAll();

        res.json(foodCollections);
    }

    static async getOne(req: Request, res: Response) {

        const { params: { id } } = req;

        const foodCollection = await ArrecadacaoAlimentoService.getOne(parseInt(id));

        if (foodCollection) {

            res.json(foodCollection);
        } else {

            res.status(404).send('Arrecadação de alimentos não encontrada');
        }
    }

    static async create(req: Request, res: Response) {

        const foodCollection = await ArrecadacaoAlimentoService.create(req.body);

        res.status(201).json(foodCollection);
    }

    static async update(req: Request, res: Response) {

        const { params: { id }, body } = req;

        const foodCollection = await ArrecadacaoAlimentoService.update(parseInt(id), body);

        res.json(foodCollection);
    }

    static async delete(req: Request, res: Response) {

        const { params: { id } } = req;

        await ArrecadacaoAlimentoService.delete(parseInt(id));

        res.status(204).send();
    }
}
