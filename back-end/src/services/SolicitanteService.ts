import SolicitanteRepository from '../repositories/SolicitanteRepository';
import { SolicitanteCreateType, SolicitanteUpdateType } from '../types/solicitanteTypes';

export default class EstadoService {

    static getAll() {

        return SolicitanteRepository.getAll();
    }

    static getOne(id: number) {

        return SolicitanteRepository.getOne(id);
    }

    static create(data: SolicitanteCreateType) {

        return SolicitanteRepository.create(data);
    }

    static update(id: number, data: SolicitanteUpdateType) {

        return SolicitanteRepository.update(id, data);
    }

    static delete(id: number) {

        return SolicitanteRepository.delete(id);
    }
}
