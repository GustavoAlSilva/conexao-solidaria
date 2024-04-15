import { Request, Response } from 'express';
import EstadoService from '../services/EstadoService';

export default class EstadoController {

    static async getAll(req: Request, res: Response) {

        const states = await EstadoService.getAll();

        res.json(states);
    }

    static async getOne(req: Request, res: Response) {

        const { params: { uf } } = req;

        const state = await EstadoService.getOne(uf);

        if (state) {

            res.json(state);
        } else {

            res.status(404).send('Estado não encontrado');
        }
    }

    static async create(req: Request, res: Response) {

        const state = await EstadoService.create(req.body);

        res.status(201).json(state);
    }

    static async update(req: Request, res: Response) {

        const { params: { uf }, body } = req;

        const state = await EstadoService.update(uf, body);

        res.json(state);
    }

    static async delete(req: Request, res: Response) {

        const { params: { uf } } = req;

        await EstadoService.delete(uf);

        res.status(204).send();
    }
}
