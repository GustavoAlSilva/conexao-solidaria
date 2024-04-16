import { Request, Response } from 'express';
import SolicitanteService from '../services/SolicitanteService';

export default class SolicitanteController {

    static async getAll(req: Request, res: Response) {

        const requesters = await SolicitanteService.getAll();

        res.json(requesters);
    }

    static async getOne(req: Request, res: Response) {

        const { params: { id } } = req;

        const requester = await SolicitanteService.getOne(parseInt(id));

        if (requester) {

            res.json(requester);
        } else {

            res.status(404).send('Solicitante não encontrado');
        }
    }

    static async create(req: Request, res: Response) {

        const requester = await SolicitanteService.create(req.body);

        res.status(201).json(requester);
    }

    static async update(req: Request, res: Response) {

        const { params: { id }, body } = req;

        const requester = await SolicitanteService.update(parseInt(id), body);

        res.json(requester);
    }

    static async delete(req: Request, res: Response) {

        const { params: { id } } = req;

        await SolicitanteService.delete(parseInt(id));

        res.status(204).send();
    }
}
