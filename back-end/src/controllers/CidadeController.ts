import { Request, Response } from 'express';
import CidadeService from '../services/CidadeService';
import { number } from 'joi';

export default class CidadeController {

    static async getAll(req: Request, res: Response) {

        const cities = await CidadeService.getAll();

        res.json(cities);
    }

    static async getOne(req: Request, res: Response) {

        const { params: { id } } = req;

        const city = await CidadeService.getOne(parseInt(id));

        if (city) {

            res.json(city);
        } else {

            res.status(404).send('Cidade não encontrada');
        }
    }

    static async create(req: Request, res: Response) {

        const city = await CidadeService.create(req.body);

        res.status(201).json(city);
    }

    static async update(req: Request, res: Response) {

        const { params: { id }, body } = req;

        const city = await CidadeService.update(parseInt(id), body);

        res.json(city);
    }

    static async delete(req: Request, res: Response) {

        const { params: { id } } = req;

        await CidadeService.delete(parseInt(id));

        res.status(204).send();
    }
}
