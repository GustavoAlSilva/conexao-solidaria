import EstadoRepository from '../repositories/EstadoRepository';
import { EstadoCreateType, EstadoUpdateType } from '../types/estadoTypes';

export default class EstadoService {

    static getAll() {

        return EstadoRepository.getAll();
    }

    static getOne(uf: string) {

        return EstadoRepository.getOne(uf);
    }

    static create(data: EstadoCreateType) {

        return EstadoRepository.create(data);
    }

    static update(uf: string, data: EstadoUpdateType) {

        return EstadoRepository.update(uf, data);
    }

    static delete(uf: string) {

        return EstadoRepository.delete(uf);
    }
}
