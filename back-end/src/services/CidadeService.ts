import CidadeRepository from '../repositories/CidadeRepository';
import { CidadeCreateType, CidadeUpdateType } from '../types/cidadeTypes';

export default class EstadoService {

    static getAll() {

        return CidadeRepository.getAll();
    }

    static getOne(id: number) {

        return CidadeRepository.getOne(id);
    }

    static create(data: CidadeCreateType) {

        return CidadeRepository.create(data);
    }

    static update(id: number, data: CidadeUpdateType) {

        return CidadeRepository.update(id, data);
    }

    static delete(id: number) {

        return CidadeRepository.delete(id);
    }
}
