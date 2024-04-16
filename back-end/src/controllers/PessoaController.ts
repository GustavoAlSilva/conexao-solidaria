import { Request, Response } from 'express';
import PessoaService from '../services/PessoaService';

export default class PessoaController {

    static async getAll(req: Request, res: Response) {

        const people = await PessoaService.getAll();

        res.json(people);
    }

    static async getOne(req: Request, res: Response) {

        const { params: { id } } = req;

        const person = await PessoaService.getOne(parseInt(id));

        if (person) {

            res.json(person);
        } else {

            res.status(404).send('Pessoa não encontrada');
        }
    }

    static async create(req: Request, res: Response) {

        const person = await PessoaService.create(req.body);

        res.status(201).json(person);
    }

    static async update(req: Request, res: Response) {

        const { params: { id }, body } = req;

        const person = await PessoaService.update(parseInt(id), body);

        res.json(person);
    }

    static async delete(req: Request, res: Response) {

        const { params: { id } } = req;

        await PessoaService.delete(parseInt(id));

        res.status(204).send();
    }
}
