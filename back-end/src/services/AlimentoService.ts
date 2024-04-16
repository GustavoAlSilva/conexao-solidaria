import AlimentoRepository from '../repositories/AlimentoRepository';
import { AlimentoCreateType, AlimentoUpdateType } from '../types/alimentoTypes';

export default class AlimentoService {

    static getAll() {

        return AlimentoRepository.getAll();
    }

    static getOne(id: number) {

        return AlimentoRepository.getOne(id);
    }

    static create(data: AlimentoCreateType) {

        return AlimentoRepository.create(data);
    }

    static update(id: number, data: AlimentoUpdateType) {

        return AlimentoRepository.update(id, data);
    }

    static delete(id: number) {

        return AlimentoRepository.delete(id);
    }
}
