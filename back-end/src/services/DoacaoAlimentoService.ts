import DoacaoAlimentoRepository from '../repositories/DoacaoAlimentoRepository';
import { DoacaoAlimentoCreateType, DoacaoAlimentoUpdateType } from '../types/doacaoAlimentoTypes';

export default class DoacaoAlimentoService {

    static getAll() {

        return DoacaoAlimentoRepository.getAll();
    }

    static getOne(id: number) {

        return DoacaoAlimentoRepository.getOne(id);
    }

    static create(data: DoacaoAlimentoCreateType) {

        return DoacaoAlimentoRepository.create(data);
    }

    static update(id: number, data: DoacaoAlimentoUpdateType) {

        return DoacaoAlimentoRepository.update(id, data);
    }

    static delete(id: number) {

        return DoacaoAlimentoRepository.delete(id);
    }
}
