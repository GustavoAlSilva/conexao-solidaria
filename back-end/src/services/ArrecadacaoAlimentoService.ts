import ArrecadacaoAlimentoRepository from '../repositories/ArrecadacaoAlimentoRepository';
import { ArrecadacaoAlimentoCreateType, ArrecadacaoAlimentoUpdateType } from '../types/arrecadacaoAlimentoTypes';

export default class ArrecadacaoAlimentoService {

    static getAll() {

        return ArrecadacaoAlimentoRepository.getAll();
    }

    static getOne(id: number) {

        return ArrecadacaoAlimentoRepository.getOne(id);
    }

    static create(data: ArrecadacaoAlimentoCreateType) {

        return ArrecadacaoAlimentoRepository.create(data);
    }

    static update(id: number, data: ArrecadacaoAlimentoUpdateType) {

        return ArrecadacaoAlimentoRepository.update(id, data);
    }

    static delete(id: number) {

        return ArrecadacaoAlimentoRepository.delete(id);
    }
}
