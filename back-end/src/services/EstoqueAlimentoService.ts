import EstoqueAlimentoRepository from '../repositories/EstoqueAlimentoRepository';
import { EstoqueAlimentoCreateType, EstoqueAlimentoUpdateType } from '../types/estoqueAlimentoTypes';

export default class EstoqueAlimentoService {

    static getAll() {

        return EstoqueAlimentoRepository.getAll();
    }

    static getOne(id: number) {

        return EstoqueAlimentoRepository.getOne(id);
    }

    static create(data: EstoqueAlimentoCreateType) {

        return EstoqueAlimentoRepository.create(data);
    }

    static update(id: number, data: EstoqueAlimentoUpdateType) {

        return EstoqueAlimentoRepository.update(id, data);
    }

    static delete(id: number) {

        return EstoqueAlimentoRepository.delete(id);
    }
}
