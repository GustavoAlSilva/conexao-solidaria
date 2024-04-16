import PessoaRepository from '../repositories/PessoaRepository';
import { PessoaCreateType, PessoaUpdateType } from '../types/pessoaTypes';

export default class EstadoService {

    static getAll() {

        return PessoaRepository.getAll();
    }

    static getOne(id: number) {

        return PessoaRepository.getOne(id);
    }

    static create(data: PessoaCreateType) {

        return PessoaRepository.create(data);
    }

    static update(id: number, data: PessoaUpdateType) {

        return PessoaRepository.update(id, data);
    }

    static delete(id: number) {

        return PessoaRepository.delete(id);
    }
}
