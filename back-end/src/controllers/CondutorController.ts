import { Request, Response } from 'express';
import CondutorService from '../services/CondutorService';

export default class CondutorController {

    static async getAll(req: Request, res: Response) {

        const conductors = await CondutorService.getAll();

        res.json(conductors);
    }

    static async getOne(req: Request, res: Response) {

        const { params: { id } } = req;

        const conductor = await CondutorService.getOne(parseInt(id));

        if (conductor) {

            res.json(conductor);
        } else {

            res.status(404).send('Condutor não encontrada');
        }
    }

    static async create(req: Request, res: Response) {

        const conductor = await CondutorService.create(req.body);

        res.status(201).json(conductor);
    }

    static async update(req: Request, res: Response) {

        const { params: { id }, body } = req;

        const conductor = await CondutorService.update(parseInt(id), body);

        res.json(conductor);
    }

    static async delete(req: Request, res: Response) {

        const { params: { id } } = req;

        await CondutorService.delete(parseInt(id));

        res.status(204).send();
    }
}
