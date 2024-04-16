import { Request, Response } from 'express';
import DoacaoAlimentoService from '../services/DoacaoAlimentoService';

export default class DoacaoAlimentoController {

    static async getAll(req: Request, res: Response) {

        const foodDonations = await DoacaoAlimentoService.getAll();

        res.json(foodDonations);
    }

    static async getOne(req: Request, res: Response) {

        const { params: { id } } = req;

        const foodDonation = await DoacaoAlimentoService.getOne(parseInt(id));

        if (foodDonation) {

            res.json(foodDonation);
        } else {

            res.status(404).send('Doação de alimentos não encontrada');
        }
    }

    static async create(req: Request, res: Response) {

        const foodDonation = await DoacaoAlimentoService.create(req.body);

        res.status(201).json(foodDonation);
    }

    static async update(req: Request, res: Response) {

        const { params: { id }, body } = req;

        const foodDonation = await DoacaoAlimentoService.update(parseInt(id), body);

        res.json(foodDonation);
    }

    static async delete(req: Request, res: Response) {

        const { params: { id } } = req;

        await DoacaoAlimentoService.delete(parseInt(id));

        res.status(204).send();
    }
}
